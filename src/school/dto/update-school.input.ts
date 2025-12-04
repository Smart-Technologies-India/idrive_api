import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateSchoolInput } from './create-school.input';
import { IsEnum, IsOptional } from 'class-validator';

enum SchoolStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

@InputType()
export class UpdateSchoolInput extends PartialType(CreateSchoolInput) {
  @IsOptional()
  @IsEnum(SchoolStatus)
  @Field(() => String, { nullable: true })
  status?: SchoolStatus;
}
