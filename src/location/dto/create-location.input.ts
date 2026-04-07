import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateLocationInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  location!: string;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  schoolId!: number;
}
