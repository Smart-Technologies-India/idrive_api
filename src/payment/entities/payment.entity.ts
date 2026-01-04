import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { PaymentStatus } from '@prisma/client';
import { Booking } from 'src/booking/entities/booking.entity';
import { User } from 'src/user/entities/user.entity';

registerEnumType(PaymentStatus, {
  name: 'PaymentStatus',
  description: 'Payment status types',
});

@ObjectType()
export class Payment {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  bookingId: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Booking, { nullable: true })
  booking?: Booking;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => Float)
  amount: number;

  @Field(() => String)
  paymentNumber: string;

  @Field(() => Date)
  paymentDate: Date;

  @Field(() => String, { nullable: true })
  paymentMethod?: string;

  @Field(() => String, { nullable: true })
  transactionId?: string;

  @Field(() => Int)
  installmentNumber: number;

  @Field(() => Int)
  totalInstallments: number;

  @Field(() => String, { nullable: true })
  notes?: string;

  @Field(() => String)
  status: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
