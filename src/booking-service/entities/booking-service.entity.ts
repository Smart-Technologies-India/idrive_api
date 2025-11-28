import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Booking } from 'src/booking/entities/booking.entity';
import { Service } from 'src/service/entities/service.entity';
import { School } from 'src/school/entities/school.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class BookingService {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  bookingId?: number;

  @Field(() => Int)
  serviceId: number;

  @Field(() => Int)
  schoolId: number;

  @Field(() => Int)
  userId: number;

  // Service Details (denormalized for historical reference)
  @Field(() => String)
  serviceName: string;

  @Field(() => String)
  serviceType: string;

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

  @Field(() => Service, { nullable: true })
  service?: Service;

  @Field(() => School, { nullable: true })
  school?: School;

  @Field(() => User, { nullable: true })
  user?: User;
}
