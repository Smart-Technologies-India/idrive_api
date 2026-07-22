import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateDriverSchoolRegistrationInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name!: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  number!: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  schoolName!: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  schoolAddress!: string;
}
