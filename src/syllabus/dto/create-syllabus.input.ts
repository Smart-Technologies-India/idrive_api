import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

@InputType()
export class CreateSyllabusInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  courseId: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  syllabusId: string;

  // Day Information
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Field(() => Int)
  dayNumber: number;

  // Lesson Details
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  title: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  topics: string;

  // Learning Objectives
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  objectives?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  practicalActivities?: string;

  // Assessment
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  assessmentCriteria?: string;

  // Additional Notes
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  notes?: string;
}
