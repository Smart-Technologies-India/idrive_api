/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as argon2 from 'argon2';
import axios from 'axios';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  private readonly smsBaseUrl = 'https://mobicomm.dove-sms.com//submitsms.jsp';
  private readonly smsUser = 'CmotorTS';
  private readonly smsKey = '0964010cecXX';
  private readonly smsSenderId = 'chohan';
  private readonly smsAccUsage = '1';
  private readonly smsEntityId = '1201159782153333311';
  private readonly smsTemplateId = '1207161822824681230';

  constructor(private readonly prisma: PrismaService) {}

  private formatMobileForSms(contact: string): string {
    const trimmed = contact.trim();
    if (trimmed.startsWith('+')) {
      return trimmed;
    }
    if (trimmed.startsWith('91') && trimmed.length === 12) {
      return `+${trimmed}`;
    }
    return `+91${trimmed}`;
  }

  private async sendOtpSms(contact: string, otp: string): Promise<boolean> {
    const mobile = this.formatMobileForSms(contact);
    const message = `Dear User, Your OTP for login to iDrive application is ${otp}. Valid for 5 Minutes. Please do not share this OTP Regards, Team iDrive`;

    const params = new URLSearchParams({
      user: this.smsUser,
      key: this.smsKey,
      mobile,
      message,
      senderid: this.smsSenderId,
      accusage: this.smsAccUsage,
      entityid: this.smsEntityId,
      tempid: this.smsTemplateId,
    });

    const smsUrl = `${this.smsBaseUrl}?${params.toString()}`;
    const smsResponse = await axios.get<string>(smsUrl);
    const responseText = String(smsResponse.data || '').trim();
    const responseParts = responseText.split(',').map((part) => part.trim());
    const isSuccess =
      responseParts.length >= 2 &&
      responseParts[0].toLowerCase() === 'sent' &&
      responseParts[1].toLowerCase() === 'success';

    if (!isSuccess) {
      this.logger.error(
        `SMS API failed for ${contact}. Response: ${responseText}`,
      );
      return false;
    }

    return true;
  }

  async login(contact: string, password: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          contact1: contact,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!user) {
        this.logger.warn(`Login attempt failed: User not found - ${contact}`);
        throw new UnauthorizedException('Invalid credentials');
      }

      if (!user.password) {
        this.logger.warn(`Login attempt failed: No password set - ${contact}`);
        throw new UnauthorizedException('Invalid credentials');
      }

      const isValid: boolean = await argon2.verify(user.password, password);

      if (!isValid) {
        this.logger.warn(`Login attempt failed: Invalid password - ${contact}`);
        throw new UnauthorizedException('Invalid credentials');
      }

      this.logger.log(`User logged in successfully - ${contact}`);
      // Don't return password
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      if (
        error instanceof UnauthorizedException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      this.logger.error(
        `Login error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new BadRequestException('Unable to process login request');
    }
  }

  async signup(mobile: string, name: string, password: string) {
    try {
      // Check if user already exists
      const existingUser = await this.prisma.user.findFirst({
        where: { contact1: mobile },
      });

      if (existingUser) {
        this.logger.warn(`Signup failed: User already exists - ${mobile}`);
        throw new ConflictException(
          'User with this mobile number already exists',
        );
      }

      const hashedPassword = await argon2.hash(password);

      const user = await this.prisma.user.create({
        data: {
          contact1: mobile,
          name: name,
          password: hashedPassword,
        },
      });

      this.logger.log(`User registered successfully - ${mobile}`);
      // Don't return password
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      if (
        error instanceof ConflictException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      this.logger.error(
        `Signup error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new BadRequestException('Unable to process signup request');
    }
  }

  async optLogin(contact: string) {
    try {
      let user = await this.prisma.user.findFirst({
        where: {
          contact1: contact,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!user) {
        user = await this.prisma.user.create({
          data: {
            contact1: contact,
            name: 'Guest User',
          },
        });

        if (!user) {
          throw new BadRequestException('User creation failed');
        }
        this.logger.log(`New OTP user created - ${contact}`);
      }

      // Generate and send OTP
      const otp = this.generateOTP(4);

      const isSent = await this.sendOtpSms(contact, otp);

      if (isSent) {
        await this.prisma.user.update({
          where: { id: user.id },
          data: { otp: otp },
        });
        this.logger.log(`OTP sent successfully - ${contact}`);
      } else {
        throw new BadRequestException('Failed to send OTP');
      }

      // Don't return sensitive data
      const { password: _pwd, otp: _otp, ...userWithoutSensitiveData } = user;
      return userWithoutSensitiveData;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      this.logger.error(
        `OTP Login error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new BadRequestException('Unable to process OTP request');
    }
  }

  async verifyOtp(contact: string, otp: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          contact1: contact,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!user) {
        this.logger.warn(
          `OTP verification failed: User not found - ${contact}`,
        );
        throw new UnauthorizedException('Invalid OTP or user not found');
      }

      if (!user.otp || user.otp !== otp) {
        this.logger.warn(`OTP verification failed: Invalid OTP - ${contact}`);
        throw new UnauthorizedException('Invalid OTP or user not found');
      }

      // Clear OTP after successful verification
      await this.prisma.user.update({
        where: { id: user.id },
        data: { otp: null },
      });

      this.logger.log(`OTP verified successfully - ${contact}`);
      // Don't return sensitive data
      const { password: _pwd, otp: _otp, ...userWithoutSensitiveData } = user;
      return userWithoutSensitiveData;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      this.logger.error(
        `OTP verification error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new BadRequestException('Unable to verify OTP');
    }
  }

  async forgotPasswordOtp(contact: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          contact1: contact,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!user) {
        this.logger.warn(
          `Forgot password OTP: No active account for contact - ${contact}`,
        );
        throw new BadRequestException(
          'No active account found with this contact number',
        );
      }

      const otp = this.generateOTP(6);

      const isSent = await this.sendOtpSms(contact, otp);

      if (isSent) {
        await this.prisma.user.update({
          where: { id: user.id },
          data: { otp },
        });
        this.logger.log(`Forgot password OTP sent - ${contact}`);
        return true;
      } else {
        throw new BadRequestException('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      this.logger.error(
        `Forgot password OTP error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new BadRequestException('Unable to process OTP request');
    }
  }

  async forgotPasswordVerify(
    contact: string,
    otp: string,
    newPassword: string,
  ) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          contact1: contact,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!user) {
        this.logger.warn(`Forgot password verify: User not found - ${contact}`);
        throw new UnauthorizedException('Invalid OTP or user not found');
      }

      if (!user.otp || user.otp !== otp) {
        this.logger.warn(
          `Forgot password verify: Invalid OTP for - ${contact}`,
        );
        throw new UnauthorizedException('Invalid OTP. Please try again.');
      }

      const hashedPassword = await argon2.hash(newPassword);

      await this.prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword, otp: null },
      });

      this.logger.log(`Password reset successful - ${contact}`);
      return true;
    } catch (error) {
      if (
        error instanceof UnauthorizedException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      this.logger.error(
        `Forgot password verify error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new BadRequestException('Unable to reset password');
    }
  }

  generateOTP(len: number): string {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < len; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
}
