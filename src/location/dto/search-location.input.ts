import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, IsString, IsInt } from 'class-validator';

@InputType()
export class SearchLocationInput {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  location?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  schoolId?: number;
}
