import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsEnum, IsInt, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { SchoolServiceStatus } from '@prisma/client';

@InputType()
export class UpdateSchoolServiceInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  serviceId?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Field(() => Float, { nullable: true })
  licensePrice?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Field(() => Float, { nullable: true })
  addonPrice?: number;

  @IsOptional()
  @IsEnum(SchoolServiceStatus)
  @Field(() => String, { nullable: true })
  status?: SchoolServiceStatus;
}
