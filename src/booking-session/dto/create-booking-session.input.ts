import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsInt,
  IsString,
  IsBoolean,
  Min,
  Max,
} from 'class-validator';
import { BookingSessionStatus } from '../entities/booking-session.entity';

@InputType()
export class CreateBookingSessionInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  bookingId: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  sessionId: string;

  // Session Information
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  dayNumber: number;

  @IsNotEmpty()
  @Field(() => Date)
  sessionDate: Date;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  slot: string;

  // Car & Driver Information
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  carId: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  carName: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  driverId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  driverName?: string;

  // Session Details
  @IsOptional()
  @Field(() => BookingSessionStatus, {
    nullable: true,
    defaultValue: BookingSessionStatus.PENDING,
  })
  status?: BookingSessionStatus;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true, defaultValue: false })
  attended?: boolean;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  completedAt?: Date;

  // Session Notes
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  instructorNotes?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  customerFeedback?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  internalNotes?: string;

  // Performance Tracking
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  @Field(() => Int, { nullable: true })
  performanceRating?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  skillsAssessed?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  progressNotes?: string;
}
