import { InputType, PartialType } from '@nestjs/graphql';
import { CreateBookingServiceInput } from './create-booking-service.input';

@InputType()
export class UpdateBookingServiceInput extends PartialType(
  CreateBookingServiceInput,
) {}
