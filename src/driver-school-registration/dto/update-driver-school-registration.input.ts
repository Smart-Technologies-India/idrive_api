import { InputType, PartialType } from '@nestjs/graphql';
import { CreateDriverSchoolRegistrationInput } from './create-driver-school-registration.input';

@InputType()
export class UpdateDriverSchoolRegistrationInput extends PartialType(
  CreateDriverSchoolRegistrationInput,
) {}
