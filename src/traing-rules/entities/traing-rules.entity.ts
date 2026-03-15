import { ObjectType, Field, Int } from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';

@ObjectType()
export class TraingRules {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  schoolId: number;

  @Field(() => String, { nullable: true })
  rule1?: string;

  @Field(() => String, { nullable: true })
  rule2?: string;

  @Field(() => String, { nullable: true })
  rule3?: string;

  @Field(() => String, { nullable: true })
  rule4?: string;

  @Field(() => String, { nullable: true })
  rule5?: string;

  @Field(() => String, { nullable: true })
  rule6?: string;

  @Field(() => String, { nullable: true })
  rule7?: string;

  @Field(() => String, { nullable: true })
  rule8?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => School, { nullable: true })
  school?: School;
}
