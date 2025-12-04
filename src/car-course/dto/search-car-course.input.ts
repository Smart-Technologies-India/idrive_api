import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsOptional } from 'class-validator';

@InputType()
export class SearchCarCourseInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true, description: 'Filter by Car ID' })
  carId?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true, description: 'Filter by Course ID' })
  courseId?: number;
}
