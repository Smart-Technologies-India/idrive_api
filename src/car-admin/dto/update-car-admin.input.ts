import { InputType, PartialType } from '@nestjs/graphql';
import { CreateCarAdminInput } from './create-car-admin.input';

@InputType()
export class UpdateCarAdminInput extends PartialType(CreateCarAdminInput) {}
