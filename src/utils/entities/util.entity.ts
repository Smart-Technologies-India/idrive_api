import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Util {
  @Field(() => Date, { description: 'Server date and time' })
  serverDateTime: Date;
}
