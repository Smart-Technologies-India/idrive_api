import { Injectable } from '@nestjs/common';
import { CreateBookingSessionInput } from './dto/create-booking-session.input';
import { WhereBookingSessionSearchInput } from './dto/search-booking-session.input';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { bookingSession, PrismaClient } from '@prisma/client';
import { UpdateBookingSessionInput } from './dto/update-booking-session.input';
import { BookingSessionPagination } from './booking-session.resolver';

@Injectable()
export class BookingSessionService extends BaseService<
  bookingSession,
  typeof CreateBookingSessionInput,
  typeof UpdateBookingSessionInput,
  typeof WhereBookingSessionSearchInput,
  typeof BookingSessionPagination,
  PrismaClient['bookingSession']
> {
  constructor(private readonly prisma: PrismaService) {
    super('BookingSession', prisma.bookingSession);
  }
}
