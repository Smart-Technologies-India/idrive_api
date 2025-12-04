import { InputType, Field, Int } from '@nestjs/graphql';
import { CourseType, CourseStatus } from '../entities/course.entity';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

@InputType()
export class SearchCourseInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  courseName?: string;

  @IsOptional()
  @IsEnum(CourseType)
  @Field(() => CourseType, { nullable: true })
  courseType?: CourseType;

  @IsOptional()
  @IsEnum(CourseStatus)
  @Field(() => CourseStatus, { nullable: true })
  status?: CourseStatus;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  courseId?: string;
}
