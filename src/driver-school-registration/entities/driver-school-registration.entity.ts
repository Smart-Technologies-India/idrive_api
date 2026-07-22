import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DriverSchoolRegistration {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  number: string;

  @Field(() => String)
  schoolName: string;

  @Field(() => String)
  schoolAddress: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
