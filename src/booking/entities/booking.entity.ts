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
import { Course } from 'src/course/entities/course.entity';
import { BookingSession } from 'src/booking-session/entities/booking-session.entity';
import { BookingService as BookingServiceEntity } from 'src/booking-service/entities/booking-service.entity';
import { Payment } from 'src/payment/entities/payment.entity';

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
export class BookingServiceInfo {
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
  @Field(() => Int)
  courseId: number;

  @Field(() => String)
  courseName: string;

  @Field(() => Float)
  coursePrice: number;

  // Services Information (deprecated - moved to bookingServices relation)
  @Field(() => String, { nullable: true })
  services?: string; // JSON array of service IDs (deprecated)

  @Field(() => String, { nullable: true })
  selectedServices?: string; // JSON array of service details (deprecated)

  @Field(() => [BookingServiceInfo], { nullable: true })
  parsedServices?: BookingServiceInfo[]; // Computed field for GraphQL (deprecated)

  // Pricing
  @Field(() => Float)
  totalAmount: number;

  @Field(() => Float, { nullable: true })
  discount?: number;

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

  @Field(() => Course, { nullable: true })
  course?: Course;

  @Field(() => [BookingSession], { nullable: true })
  sessions?: BookingSession[];

  @Field(() => [BookingServiceEntity], { nullable: true })
  bookingServices?: BookingServiceEntity[];

  @Field(() => [Payment], { nullable: true })
  payments?: Payment[];
}
