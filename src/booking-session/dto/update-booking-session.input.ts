import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateBookingSessionInput } from './create-booking-session.input';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateBookingSessionInput extends PartialType(
  CreateBookingSessionInput,
) {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  id: number;
}
