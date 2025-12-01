import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsNumber,
  IsEnum,
  Min,
} from 'class-validator';
import { ServiceType, ServiceStatus } from '../entities/service.entity';

@InputType()
export class CreateServiceInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  serviceId: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  serviceName: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  category: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Field(() => Int)
  duration: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  description: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  features?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  includedServices?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  requirements?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  termsAndConditions?: string;

  @IsOptional()
  @IsEnum(ServiceStatus)
  @Field(() => ServiceStatus, { nullable: true })
  status?: ServiceStatus;
}
