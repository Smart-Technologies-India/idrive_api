import { InputType, PartialType } from '@nestjs/graphql';
import { CreateLicenseApplicationInput } from './create-license-application.input';

@InputType()
export class UpdateLicenseApplicationInput extends PartialType(
  CreateLicenseApplicationInput,
) {}
