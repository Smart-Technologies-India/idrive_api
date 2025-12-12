import { CreateUtilInput } from './create-util.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUtilInput extends PartialType(CreateUtilInput) {
  @Field(() => Int)
  id: number;
}
