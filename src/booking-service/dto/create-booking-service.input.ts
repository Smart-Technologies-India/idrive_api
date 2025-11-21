import { InputType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsInt,
  IsString,
  IsOptional,
  IsPositive,
} from 'class-validator';

@InputType()
export class CreateBookingServiceInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  bookingId: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  serviceId: number;

  // Service Details (denormalized for historical reference)
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  serviceName: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  serviceType: string;

  @IsNotEmpty()
  @IsPositive()
  @Field(() => Float)
  price: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  description?: string;
}
