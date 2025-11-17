import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';
import { User } from 'src/user/entities/user.entity';
import { Car } from 'src/car/entities/car.entity';
import { BookingSession } from 'src/booking-session/entities/booking-session.entity';

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW',
}

registerEnumType(BookingStatus, {
  name: 'BookingStatus',
});

@ObjectType()
export class BookingService {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  serviceType: string;

  @Field(() => String)
  description: string;

  @Field(() => Float)
  price: number;
}

@ObjectType()
export class Booking {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  schoolId: number;

  @Field(() => String)
  bookingId: string;

  // Car & Slot Information
  @Field(() => Int)
  carId: number;

  @Field(() => String)
  carName: string;

  @Field(() => String)
  slot: string;

  @Field(() => Date)
  bookingDate: Date;

  // Customer Information
  @Field(() => String)
  customerMobile: string;

  @Field(() => String, { nullable: true })
  customerName?: string;

  @Field(() => String, { nullable: true })
  customerEmail?: string;

  @Field(() => Int, { nullable: true })
  customerId?: number;

  // Course Information
  @Field(() => String)
  courseId: string;

  @Field(() => String)
  courseName: string;

  @Field(() => Float)
  coursePrice: number;

  // Services Information
  @Field(() => String, { nullable: true })
  services?: string; // JSON array of service IDs

  @Field(() => String, { nullable: true })
  selectedServices?: string; // JSON array of service details

  @Field(() => [BookingService], { nullable: true })
  parsedServices?: BookingService[]; // Computed field for GraphQL

  // Pricing
  @Field(() => Float)
  totalAmount: number;

  // Additional Information
  @Field(() => String, { nullable: true })
  notes?: string;

  // Status & Tracking
  @Field(() => BookingStatus)
  status: BookingStatus;

  @Field(() => String, { nullable: true })
  confirmationNumber?: string;

  // Timestamps
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // Relations
  @Field(() => School, { nullable: true })
  school?: School;

  @Field(() => User, { nullable: true })
  customer?: User;

  @Field(() => Car, { nullable: true })
  car?: Car;

  @Field(() => [BookingSession], { nullable: true })
  sessions?: BookingSession[];
}
