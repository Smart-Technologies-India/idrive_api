import { ObjectType, Field, Int } from '@nestjs/graphql';
import { School } from './school.entity';

@ObjectType()
export class SchoolWithCounts extends School {
  @Field(() => Int, { nullable: true })
  userCount?: number;

  @Field(() => Int, { nullable: true })
  driverCount?: number;

  @Field(() => Int, { nullable: true })
  carCount?: number;

  @Field(() => Int, { nullable: true })
  bookingCount?: number;
}
