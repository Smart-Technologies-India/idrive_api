import { CreateBookingInput } from './create-booking.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsEnum, IsOptional } from 'class-validator';
import { BookingStatus } from '../entities/booking.entity';

@InputType()
export class UpdateBookingInput extends PartialType(CreateBookingInput) {
  @IsOptional()
  @IsEnum(BookingStatus)
  @Field(() => BookingStatus, { nullable: true })
  status?: BookingStatus;
}
