import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCarCourseInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int, { description: 'Car ID' })
  carId: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int, { description: 'Course ID' })
  courseId: number;
}
