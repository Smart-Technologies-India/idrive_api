import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateLicenseApplicationInput } from './create-license-application.input';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateLicenseApplicationInput extends PartialType(
  CreateLicenseApplicationInput,
) {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  id: number;
}
