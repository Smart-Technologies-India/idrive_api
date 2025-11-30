import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateCarCourseInput } from './create-car-course.input';

@InputType()
export class UpdateCarCourseInput extends PartialType(CreateCarCourseInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  carId?: number;

  @Field(() => Int, { nullable: true })
  courseId?: number;

  @Field(() => Date, { nullable: true, description: 'Soft delete timestamp' })
  deletedAt?: Date;
}
