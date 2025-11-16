import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsInt,
  IsEmail,
  IsDateString,
  IsJSON,
  Length,
  IsPositive,
} from 'class-validator';

@InputType()
export class BookingServiceInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  id: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  serviceType: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  description?: string;

  @IsNotEmpty()
  @IsPositive()
  @Field(() => Int)
  price: number;
}

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
  @IsString()
  @Field(() => String)
  carId: string;

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
  @IsString()
  @Field(() => String)
  courseId: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  courseName: string;

  @IsNotEmpty()
  @IsPositive()
  @Field(() => Int)
  coursePrice: number;

  // Services Information
  @IsOptional()
  @Field(() => [String], { nullable: true })
  services?: string[]; // Array of service IDs

  @IsOptional()
  @Field(() => [BookingServiceInput], { nullable: true })
  selectedServices?: BookingServiceInput[]; // Array of service details

  // Pricing
  @IsNotEmpty()
  @IsPositive()
  @Field(() => Int)
  totalAmount: number;

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