import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateBookingSessionInput } from './create-booking-session.input';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateBookingSessionInput extends PartialType(
  CreateBookingSessionInput,
) {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
