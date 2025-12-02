import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateServiceInput } from './create-service.input';
import { IsOptional, IsString, IsInt, IsEnum, Min } from 'class-validator';
import { ServiceCategory, ServiceStatus } from '@prisma/client';

@InputType()
export class UpdateServiceInput extends PartialType(CreateServiceInput) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  serviceName?: string;

  @IsOptional()
  @IsEnum(ServiceCategory)
  @Field(() => ServiceCategory, { nullable: true })
  category?: ServiceCategory;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => Int, { nullable: true })
  duration?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  description?: string;

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
