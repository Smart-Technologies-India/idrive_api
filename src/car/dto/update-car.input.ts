import { InputType, Field, Int, Float, PartialType } from '@nestjs/graphql';
import { CreateCarInput } from './create-car.input';
import { CarStatus, FuelType, TransmissionType } from '../entities/car.entity';
import {
  IsEnum,
  IsOptional,
  IsString,
  IsInt,
  IsNumber,
  IsDateString,
  IsArray,
  Min,
  Max,
} from 'class-validator';

@InputType()
export class UpdateCarInput extends PartialType(CreateCarInput) {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  // Basic Information
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  carName?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  model?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  registrationNumber?: string;

  @IsOptional()
  @IsInt()
  @Min(1900)
  @Max(2100)
  @Field(() => Int, { nullable: true })
  year?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  color?: string;

  // Technical Specifications
  @IsOptional()
  @IsEnum(FuelType)
  @Field(() => FuelType, { nullable: true })
  fuelType?: FuelType;

  @IsOptional()
  @IsEnum(TransmissionType)
  @Field(() => TransmissionType, { nullable: true })
  transmission?: TransmissionType;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  @Field(() => Int, { nullable: true })
  seatingCapacity?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  engineNumber?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  chassisNumber?: string;

  // Purchase Information
  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  purchaseDate?: Date;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true })
  purchaseCost?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true })
  currentMileage?: number;

  // Documents & Compliance
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  insuranceNumber?: string;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  insuranceExpiry?: Date;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  pucExpiry?: Date;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  fitnessExpiry?: Date;

  // Maintenance
  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  lastServiceDate?: Date;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true })
  nextServiceDate?: Date;

  // Assignment
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  assignedDriverId?: number;

  // Course Assignment (many-to-many)
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  @Field(() => [Int], {
    nullable: true,
    description: 'Array of course IDs to associate with this car',
  })
  courseIds?: number[];

  // Performance Metrics
  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true })
  totalBookings?: number;

  // Status
  @IsOptional()
  @IsEnum(CarStatus)
  @Field(() => CarStatus, { nullable: true })
  status?: CarStatus;
}
