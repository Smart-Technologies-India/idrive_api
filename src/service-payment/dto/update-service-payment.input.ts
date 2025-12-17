import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateServicePaymentInput } from './create-service-payment.input';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateServicePaymentInput extends PartialType(
  CreateServicePaymentInput,
) {
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
