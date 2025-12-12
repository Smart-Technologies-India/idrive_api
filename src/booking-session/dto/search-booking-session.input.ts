import { InputType, Field, Int } from '@nestjs/graphql';
import { BookingSessionStatus } from '@prisma/client';
import {
  IsOptional,
  IsInt,
  IsString,
  IsEnum,
  IsBoolean,
} from 'class-validator';

@InputType()
export class WhereBookingSessionSearchInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  bookingId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  sessionId?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  dayNumber?: number;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  sessionDate?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  slot?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  carId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  carName?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  driverId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  driverName?: string;

  @IsOptional()
  @IsEnum(BookingSessionStatus)
  @Field(() => BookingSessionStatus, { nullable: true })
  status?: BookingSessionStatus;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  attended?: boolean;
}
