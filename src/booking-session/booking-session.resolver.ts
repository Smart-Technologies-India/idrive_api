import { Resolver, ObjectType } from '@nestjs/graphql';
import { BookingSession } from './entities/booking-session.entity';
import { CreateBookingSessionInput } from './dto/create-booking-session.input';
import { WhereBookingSessionSearchInput } from './dto/search-booking-session.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { bookingSession, PrismaClient } from '@prisma/client';
import { UpdateBookingSessionInput } from './dto/update-booking-session.input';
import { BookingSessionService } from './booking-session.service';

@ObjectType()
export class BookingSessionPagination extends BasePaginated(BookingSession) {}

const BaseBookingSessionResolver = createBaseResolver<
  typeof BookingSession,
  bookingSession,
  typeof CreateBookingSessionInput,
  typeof UpdateBookingSessionInput,
  typeof WhereBookingSessionSearchInput,
  typeof BookingSessionPagination,
  PrismaClient['bookingSession']
>(
  () => BookingSession,
  'BookingSession',
  () => CreateBookingSessionInput,
  () => UpdateBookingSessionInput,
  () => WhereBookingSessionSearchInput,
  () => BookingSessionPagination,
);

@Resolver(() => BookingSession)
export class BookingSessionResolver extends BaseBookingSessionResolver {
  constructor(private readonly bookingSessionService: BookingSessionService) {
    super(bookingSessionService);
  }
}
