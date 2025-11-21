import { IsDate, IsEnum, IsOptional, IsString, IsInt } from 'class-validator';
import { CreateBookingInput } from './create-booking.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { BookingStatus } from '../entities/booking.entity';

@InputType()
export class WhereBookingSearchInput extends PartialType(CreateBookingInput) {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  id?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  bookingId?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  carId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  carName?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  slot?: string;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  bookingDate?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  customerMobile?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  customerName?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  customerEmail?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  customerId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  courseName?: string;

  @IsOptional()
  @IsEnum(BookingStatus)
  @Field(() => BookingStatus, { nullable: true })
  status?: BookingStatus;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  confirmationNumber?: string;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // Date range filters
  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  bookingDateFrom?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  bookingDateTo?: Date;
}
