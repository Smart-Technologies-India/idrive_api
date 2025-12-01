import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { SchoolServiceStatus } from '@prisma/client';

@InputType()
export class WhereSchoolServiceSearchInput {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  schoolServiceId?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  serviceId?: number;

  @IsOptional()
  @IsEnum(SchoolServiceStatus)
  @Field(() => String, { nullable: true })
  status?: SchoolServiceStatus;
}
