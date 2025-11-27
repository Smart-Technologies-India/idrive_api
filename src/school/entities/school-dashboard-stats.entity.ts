import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class SchoolDashboardStats {
  @Field(() => Int)
  todayBookings: number;

  @Field(() => Int)
  pendingBookings: number;

  @Field(() => Float)
  totalRevenue: number;

  @Field(() => Int)
  activeCustomers: number;
}
