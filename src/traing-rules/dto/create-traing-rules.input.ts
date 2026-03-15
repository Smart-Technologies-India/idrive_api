import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateTraingRulesInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  schoolId: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  rule1?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  rule2?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  rule3?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  rule4?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  rule5?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  rule6?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  rule7?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  rule8?: string;
}
