import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { PaymentStatus } from '@prisma/client';

registerEnumType(PaymentStatus, {
  name: 'ServicePaymentStatus',
  description: 'Service payment status types',
});

@ObjectType()
export class ServicePayment {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  bookingServiceId: number;

  @Field(() => Int)
  userId: number;

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
