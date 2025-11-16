import { Injectable } from '@nestjs/common';
import { CreateBookingInput } from './dto/create-booking.input';
import { WhereBookingSearchInput } from './dto/search-booking.input';
import { BaseService } from 'src/base/base.service';
import { BookingPagination } from './booking.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { booking, PrismaClient } from '@prisma/client';
import { UpdateBookingInput } from './dto/update-booking.input';

@Injectable()
export class BookingService extends BaseService<
  booking,
  typeof CreateBookingInput,
  typeof UpdateBookingInput,
  typeof WhereBookingSearchInput,
  typeof BookingPagination,
  PrismaClient['booking']
> {
  constructor(private readonly prisma: PrismaService) {
    super('Booking', prisma.booking);
  }
}