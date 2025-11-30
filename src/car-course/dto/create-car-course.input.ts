import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarCourseInput {
  @Field(() => Int, { description: 'Car ID' })
  carId: number;

  @Field(() => Int, { description: 'Course ID' })
  courseId: number;
}
