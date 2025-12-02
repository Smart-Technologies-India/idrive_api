/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { BookingServiceType } from '@prisma/client';
import { Booking } from 'src/booking/entities/booking.entity';
import { SchoolService } from 'src/school-service/entities/school-service.entity';
import { School } from 'src/school/entities/school.entity';
import { User } from 'src/user/entities/user.entity';

registerEnumType(BookingServiceType, {
  name: 'BookingServiceType',
});

@ObjectType()
export class BookingService {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  bookingId?: number;

  @Field(() => Int)
  schoolServiceId: number;

  @Field(() => Int)
  schoolId: number;

  @Field(() => Int)
  userId: number;

  // Service Details (denormalized for historical reference)
  @Field(() => String)
  serviceName: string;

  @Field(() => BookingServiceType)
  serviceType: BookingServiceType;

  @Field(() => Float)
  price: number;

  @Field(() => String, { nullable: true })
  description?: string;

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
  @Field(() => Booking, { nullable: true })
  booking?: Booking;

  @Field(() => SchoolService, { nullable: true })
  schoolService?: SchoolService;

  @Field(() => School, { nullable: true })
  school?: School;

  @Field(() => User, { nullable: true })
  user?: User;
}
