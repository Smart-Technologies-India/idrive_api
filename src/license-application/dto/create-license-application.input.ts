import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsDateString,
  IsEnum,
} from 'class-validator';
import {
  LicenseApplicationStatus,
  TestStatus,
} from '../entities/license-application.entity';

@InputType()
export class CreateLicenseApplicationInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  bookingServiceId: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  llNumber?: string;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  issuedDate?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  dlApplicationNumber?: string;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  testDate?: Date;

  @IsOptional()
  @IsEnum(TestStatus)
  @Field(() => TestStatus, { nullable: true, defaultValue: TestStatus.NONE })
  testStatus?: TestStatus;

  @IsOptional()
  @IsEnum(LicenseApplicationStatus)
  @Field(() => LicenseApplicationStatus, {
    nullable: true,
    defaultValue: LicenseApplicationStatus.PENDING,
  })
  status?: LicenseApplicationStatus;
}
