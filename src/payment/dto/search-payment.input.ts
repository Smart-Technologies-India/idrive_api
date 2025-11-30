import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsNumber, IsString, IsDate } from 'class-validator';

@InputType()
export class SearchPaymentInput {
  @IsOptional()
  @IsNumber()
  @Field(() => Int, { nullable: true, description: 'Filter by booking ID' })
  bookingId?: number;

  @IsOptional()
  @IsNumber()
  @Field(() => Int, { nullable: true, description: 'Filter by user ID' })
  userId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true, description: 'Filter by payment method' })
  paymentMethod?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true, description: 'Filter by status' })
  status?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true, description: 'Filter by payment number' })
  paymentNumber?: string;
}
