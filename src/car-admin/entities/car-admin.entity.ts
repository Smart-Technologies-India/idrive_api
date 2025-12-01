/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CarAdminStatus, CarCategory } from '@prisma/client';

@ObjectType()
export class CarAdmin {
  @Field(() => Int)
  id: number;

  // Basic Information
  @Field(() => String)
  name: string;

  @Field(() => String)
  manufacturer: string;

  @Field(() => CarCategory)
  category: CarCategory;

  // Status
  @Field(() => CarAdminStatus)
  status: CarAdminStatus;

  // Timestamps
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
