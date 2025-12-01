import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

@InputType()
export class CreateSchoolServiceInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  schoolId: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  serviceId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Field(() => Float)
  licensePrice: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Field(() => Float)
  addonPrice: number;
}
