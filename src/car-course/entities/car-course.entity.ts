import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Car } from 'src/car/entities/car.entity';
import { Course } from 'src/course/entities/course.entity';

@ObjectType()
export class CarCourse {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  carId: number;

  @Field(() => Int)
  courseId: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // Relations
  @Field(() => Car, { nullable: true })
  car?: Car;

  @Field(() => Course, { nullable: true })
  course?: Course;
}
