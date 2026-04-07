import { ObjectType, Field, Int } from '@nestjs/graphql';
import { School } from 'src/school/entities/school.entity';

@ObjectType()
export class Location {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  location!: string;

  @Field(() => Int)
  schoolId!: number;

  @Field(() => School, { nullable: true })
  school?: School;
}
