import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsInt, IsString } from 'class-validator';

@InputType()
export class WhereDriverSchoolRegistrationSearchInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  id?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  number?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  schoolName?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  schoolAddress?: string;
}
