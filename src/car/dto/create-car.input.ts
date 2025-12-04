import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { CarStatus, FuelType, TransmissionType } from '../entities/car.entity';
import {
  IsEnum,
  IsNotEmpty,
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
export class CreateCarInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  schoolId: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  carId: string;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  carAdminId: number;

  // Basic Information
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  carName: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  model: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  registrationNumber: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1900)
  @Max(2100)
  @Field(() => Int)
  year: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  color: string;

  // Technical Specifications
  @IsNotEmpty()
  @IsEnum(FuelType)
  @Field(() => FuelType)
  fuelType: FuelType;

  @IsNotEmpty()
  @IsEnum(TransmissionType)
  @Field(() => TransmissionType)
  transmission: TransmissionType;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  @Field(() => Int, { nullable: true, defaultValue: 5 })
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
  @Field(() => Int, { nullable: true, defaultValue: 0 })
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

  // Status
  @IsOptional()
  @IsEnum(CarStatus)
  @Field(() => CarStatus, { nullable: true, defaultValue: CarStatus.AVAILABLE })
  status?: CarStatus;
}
