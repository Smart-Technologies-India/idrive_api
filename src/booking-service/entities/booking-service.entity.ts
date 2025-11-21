import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Booking } from 'src/booking/entities/booking.entity';
import { Service } from 'src/service/entities/service.entity';

@ObjectType()
export class BookingService {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  bookingId: number;

  @Field(() => Int)
  serviceId: number;

  // Service Details (denormalized for historical reference)
  @Field(() => String)
  serviceName: string;

  @Field(() => String)
  serviceType: string;

  @Field(() => Float)
  price: number;

  @Field(() => String, { nullable: true })
  description?: string;

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

  @Field(() => Service, { nullable: true })
  service?: Service;
}
