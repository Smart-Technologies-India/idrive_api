import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsInt, IsString, IsDateString } from 'class-validator';

@InputType()
export class WhereBookingServiceSearchInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  bookingId?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  serviceId?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  userId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  serviceName?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  serviceType?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  confirmationNumber?: string;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
