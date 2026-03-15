import { InputType, PartialType } from '@nestjs/graphql';
import { CreateTraingRulesInput } from './create-traing-rules.input';

@InputType()
export class UpdateTraingRulesInput extends PartialType(
  CreateTraingRulesInput,
) {}
