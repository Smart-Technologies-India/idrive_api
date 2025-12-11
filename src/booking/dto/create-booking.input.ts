import { InputType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsInt,
  IsEmail,
  IsDateString,
  Length,
  IsPositive,
} from 'class-validator';

@InputType()
export class CreateBookingInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  schoolId: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  bookingId: string;

  // Car & Slot Information
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  carId: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  carName: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  slot: string;

  @IsNotEmpty()
  @IsDateString()
  @Field(() => Date)
  bookingDate: Date;

  // Customer Information
  @IsNotEmpty()
  @IsString()
  @Length(10, 10, { message: 'Mobile number must be exactly 10 digits' })
  @Field(() => String)
  customerMobile: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  customerName?: string;

  @IsOptional()
  @IsEmail()
  @Field(() => String, { nullable: true })
  customerEmail?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  customerId?: number;

  // Course Information
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  courseId: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  courseName: string;

  @IsNotEmpty()
  @IsPositive()
  @Field(() => Float)
  coursePrice: number;

  // Pricing
  @IsNotEmpty()
  @IsPositive()
  @Field(() => Float)
  totalAmount: number;

  @IsOptional()
  @Field(() => Float, { nullable: true })
  discount?: number;

  // Additional Information
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  notes?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  confirmationNumber?: string;
}
