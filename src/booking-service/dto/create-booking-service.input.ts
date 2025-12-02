import { InputType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsInt,
  IsString,
  IsOptional,
  IsPositive,
  IsEnum,
} from 'class-validator';
import { BookingServiceType } from '@prisma/client';

@InputType()
export class CreateBookingServiceInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  bookingId?: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  schoolServiceId: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  schoolId: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  userId: number;

  // Service Details (denormalized for historical reference)
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  serviceName: string;

  @IsNotEmpty()
  @IsEnum(BookingServiceType)
  @Field(() => String)
  serviceType: BookingServiceType;

  @IsNotEmpty()
  @IsPositive()
  @Field(() => Float)
  price: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  description?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  confirmationNumber?: string;
}
