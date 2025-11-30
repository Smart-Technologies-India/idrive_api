import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreatePaymentInput } from './create-payment.input';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdatePaymentInput extends PartialType(CreatePaymentInput) {
  @IsNumber()
  @Field(() => Int)
  id: number;

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
  notes?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  status?: string;
}
