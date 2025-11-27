import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SchoolStatistics {
  @Field(() => Int)
  totalSchools: number;

  @Field(() => Int)
  activeSchools: number;

  @Field(() => Int)
  inactiveSchools: number;

  @Field(() => Int)
  suspendedSchools: number;

  @Field(() => Int)
  totalUsers: number;

  @Field(() => Int)
  totalDrivers: number;

  @Field(() => Int)
  totalCars: number;

  @Field(() => Int)
  totalBookings: number;
}
