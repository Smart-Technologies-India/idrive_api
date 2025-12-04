import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateBookingSessionInput } from './create-booking-session.input';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateBookingSessionInput extends PartialType(
  CreateBookingSessionInput,
) {
  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
