import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

@InputType()
export class UpdatePaymentInput {
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true })
  amount?: number;

  @IsOptional()
  @IsNumber()
  @Field(() => Int, { nullable: true })
  bookingId?: number;

  @IsOptional()
  @IsNumber()
  @Field(() => Int, { nullable: true })
  userId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  paymentNumber?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  paymentMethod?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  transactionId?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  bankName?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Field(() => Int, { nullable: true })
  installmentNumber?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Field(() => Int, { nullable: true })
  totalInstallments?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  notes?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  status?: string;
}
