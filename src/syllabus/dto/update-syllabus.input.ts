import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateSyllabusInput } from './create-syllabus.input';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

@InputType()
export class UpdateSyllabusInput extends PartialType(CreateSyllabusInput) {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  courseId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  syllabusId?: string;

  // Day Information
  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => Int, { nullable: true })
  dayNumber?: number;

  // Lesson Details
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  title?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  topics?: string;

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
