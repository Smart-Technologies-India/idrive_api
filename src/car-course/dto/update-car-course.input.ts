import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateCarCourseInput } from './create-car-course.input';
import { IsDateString, IsInt, IsOptional } from 'class-validator';

@InputType()
export class UpdateCarCourseInput extends PartialType(CreateCarCourseInput) {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  carId?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  courseId?: number;

  @IsOptional()
  @IsDateString()
  @Field(() => Date, { nullable: true, description: 'Soft delete timestamp' })
  deletedAt?: Date;
}
