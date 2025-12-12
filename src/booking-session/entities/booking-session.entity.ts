import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { BookingSessionStatus } from '@prisma/client';
import { Booking } from 'src/booking/entities/booking.entity';
import { Car } from 'src/car/entities/car.entity';
import { Driver } from 'src/driver/entities/driver.entity';

registerEnumType(BookingSessionStatus, {
  name: 'BookingSessionStatus',
});

@ObjectType()
export class BookingSession {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  bookingId: number;

  // Session Information
  @Field(() => Int)
  dayNumber: number;

  @Field(() => Date)
  sessionDate: Date;

  @Field(() => String)
  slot: string;

  // Car & Driver Information
  @Field(() => Int)
  carId: number;

  @Field(() => Int)
  driverId: number;

  // Session Details
  @Field(() => BookingSessionStatus)
  status: BookingSessionStatus;

  @Field(() => Boolean)
  attended: boolean;

  @Field(() => Date, { nullable: true })
  completedAt?: Date;

  // Session Notes
  @Field(() => String, { nullable: true })
  instructorNotes?: string;

  @Field(() => String, { nullable: true })
  customerFeedback?: string;

  @Field(() => String, { nullable: true })
  internalNotes?: string;

  // Performance Tracking
  @Field(() => Int, { nullable: true })
  performanceRating?: number;

  @Field(() => String, { nullable: true })
  skillsAssessed?: string;

  @Field(() => String, { nullable: true })
  progressNotes?: string;

  // Timestamps
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // Relations
  @Field(() => Booking, { nullable: true })
  booking?: Booking;

  @Field(() => Car, { nullable: true })
  car?: Car;

  @Field(() => Driver, { nullable: true })
  driver?: Driver;
}
