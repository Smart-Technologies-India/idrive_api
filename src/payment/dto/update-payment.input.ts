import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreatePaymentInput } from './create-payment.input';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdatePaymentInput extends PartialType(CreatePaymentInput) {
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
