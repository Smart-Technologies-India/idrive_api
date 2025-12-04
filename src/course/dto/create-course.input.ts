import { InputType, Field, Int, Float } from '@nestjs/graphql';
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
export class CreateCourseInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  schoolId: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  courseId: string;

  // Basic Information
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  courseName: string;

  @IsNotEmpty()
  @IsEnum(CourseType)
  @Field(() => CourseType)
  courseType: CourseType;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Field(() => Int)
  minsPerDay: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Field(() => Int)
  courseDays: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Field(() => Float)
  price: number;

  // Enrollment
  @IsOptional()
  @IsInt()
  @Min(0)
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  enrolledStudents?: number;

  // Course Details
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  description: string;

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
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  sessionsCompleted?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Field(() => Float, { nullable: true, defaultValue: 0 })
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
  @Field(() => CourseStatus, {
    nullable: true,
    defaultValue: CourseStatus.ACTIVE,
  })
  status?: CourseStatus;
}
