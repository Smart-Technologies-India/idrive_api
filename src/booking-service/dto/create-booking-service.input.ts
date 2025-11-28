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
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  bookingId?: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  serviceId: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  schoolId: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  userId: number;

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

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  confirmationNumber?: string;
}
