import { Resolver, ObjectType } from '@nestjs/graphql';
import { BookingService } from './booking.service';
import { Booking } from './entities/booking.entity';
import { CreateBookingInput } from './dto/create-booking.input';
import { WhereBookingSearchInput } from './dto/search-booking.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { booking, PrismaClient } from '@prisma/client';
import { UpdateBookingInput } from './dto/update-booking.input';

@ObjectType()
export class BookingPagination extends BasePaginated(Booking) {}

const BaseBookingResolver = createBaseResolver<
  typeof Booking,
  booking,
  typeof CreateBookingInput,
  typeof UpdateBookingInput,
  typeof WhereBookingSearchInput,
  typeof BookingPagination,
  PrismaClient['booking']
>(
  () => Booking,
  'Booking',
  () => CreateBookingInput,
  () => UpdateBookingInput,
  () => WhereBookingSearchInput,
  () => BookingPagination,
);

@Resolver(() => Booking)
export class BookingResolver extends BaseBookingResolver {
  constructor(private readonly bookingService: BookingService) {
    super(bookingService);
  }
}
