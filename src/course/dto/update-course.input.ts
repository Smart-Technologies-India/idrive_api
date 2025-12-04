import { InputType, Field, Int, Float, PartialType } from '@nestjs/graphql';
import { CreateCourseInput } from './create-course.input';
import { CourseType, CourseStatus } from '../entities/course.entity';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsNumber,
  IsArray,
  Min,
} from 'class-validator';

@InputType()
export class UpdateCourseInput extends PartialType(CreateCourseInput) {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  courseId?: string;

  // Basic Information
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  courseName?: string;

  @IsOptional()
  @IsEnum(CourseType)
  @Field(() => CourseType, { nullable: true })
  courseType?: CourseType;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => Int, { nullable: true })
  hoursPerDay?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => Int, { nullable: true })
  courseDays?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true })
  price?: number;

  // Enrollment
  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true })
  enrolledStudents?: number;

  // Course Details
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  description?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  syllabus?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  requirements?: string;

  // Performance Metrics
  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true })
  sessionsCompleted?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true })
  totalRevenue?: number;

  // Car Assignment (many-to-many)
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  @Field(() => [Int], {
    nullable: true,
    description: 'Array of car IDs to associate with this course',
  })
  carIds?: number[];

  // Status
  @IsOptional()
  @IsEnum(CourseStatus)
  @Field(() => CourseStatus, { nullable: true })
  status?: CourseStatus;
}
