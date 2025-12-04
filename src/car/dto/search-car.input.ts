import { InputType, Field, Int } from '@nestjs/graphql';
import { CarStatus, FuelType } from '../entities/car.entity';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

@InputType()
export class SearchCarInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @IsOptional()
  @IsEnum(CarStatus)
  @Field(() => CarStatus, { nullable: true })
  status?: CarStatus;

  @IsOptional()
  @IsEnum(FuelType)
  @Field(() => FuelType, { nullable: true })
  fuelType?: FuelType;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  assignedDriverId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  search?: string;
}
