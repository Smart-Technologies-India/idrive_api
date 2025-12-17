import { InputType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

@InputType()
export class CreateServicePaymentInput {
  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int, { description: 'Booking Service ID' })
  bookingServiceId: number;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int, { description: 'User ID' })
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { description: 'Payment amount' })
  amount: number;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
    description: 'Payment method (CASH, CARD, UPI, etc.)',
  })
  paymentMethod?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
    description: 'Bank/UPI transaction ID',
  })
  transactionId?: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Field(() => Int, { description: 'Current installment number' })
  installmentNumber: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Field(() => Int, { description: 'Total number of installments planned' })
  totalInstallments: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true, description: 'Additional notes' })
  notes?: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String, { description: 'Unique payment number' })
  paymentNumber: string;
}
