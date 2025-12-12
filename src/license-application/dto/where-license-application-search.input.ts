import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsInt, IsEnum, IsString } from 'class-validator';
import {
  LicenseApplicationStatus,
  TestStatus,
} from '../entities/license-application.entity';

@InputType()
export class WhereLicenseApplicationSearchInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  bookingServiceId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  llNumber?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  dlApplicationNumber?: string;

  @IsOptional()
  @IsEnum(TestStatus)
  @Field(() => TestStatus, { nullable: true })
  testStatus?: TestStatus;

  @IsOptional()
  @IsEnum(LicenseApplicationStatus)
  @Field(() => LicenseApplicationStatus, { nullable: true })
  status?: LicenseApplicationStatus;
}
