import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { CourseType, CourseStatus } from '../entities/course.entity';

@InputType()
export class CreateCourseInput {
  @Field(() => Int)
  schoolId: number;

  @Field(() => String)
  courseId: string;

  // Basic Information
  @Field(() => String)
  courseName: string;

  @Field(() => CourseType)
  courseType: CourseType;

  @Field(() => Int)
  minsPerDay: number;

  @Field(() => Int)
  courseDays: number;

  @Field(() => Float)
  price: number;

  // Enrollment
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  enrolledStudents?: number;

  // Course Details
  @Field(() => String)
  description: string;

  @Field(() => String, { nullable: true })
  syllabus?: string;

  @Field(() => String, { nullable: true })
  requirements?: string;

  // Performance Metrics
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  sessionsCompleted?: number;

  @Field(() => Float, { nullable: true, defaultValue: 0 })
  totalRevenue?: number;

  // Car Assignment (many-to-many)
  @Field(() => [Int], {
    nullable: true,
    description: 'Array of car IDs to associate with this course',
  })
  carIds?: number[];

  // Status
  @Field(() => CourseStatus, {
    nullable: true,
    defaultValue: CourseStatus.ACTIVE,
  })
  status?: CourseStatus;
}
