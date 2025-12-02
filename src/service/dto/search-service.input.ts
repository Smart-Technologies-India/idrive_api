import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsInt, IsEnum } from 'class-validator';
import { ServiceCategory, ServiceStatus } from '@prisma/client';

@InputType()
export class WhereServiceSearchInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @IsOptional()
  @IsEnum(ServiceStatus)
  @Field(() => ServiceStatus, { nullable: true })
  status?: ServiceStatus;

  @IsOptional()
  @IsEnum(ServiceCategory)
  @Field(() => ServiceCategory, { nullable: true })
  category?: ServiceCategory;
}
