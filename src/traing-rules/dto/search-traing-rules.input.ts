import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, IsInt } from 'class-validator';

@InputType()
export class SearchTraingRulesInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;
}
