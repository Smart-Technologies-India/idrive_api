import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateBookingServiceInput } from './create-booking-service.input';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateBookingServiceInput extends PartialType(
  CreateBookingServiceInput,
) {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  id: number;
}
