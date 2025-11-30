import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class SearchCarCourseInput {
  @Field(() => Int, { nullable: true, description: 'Filter by Car ID' })
  carId?: number;

  @Field(() => Int, { nullable: true, description: 'Filter by Course ID' })
  courseId?: number;
}
