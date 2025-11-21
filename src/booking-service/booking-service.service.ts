import { Injectable } from '@nestjs/common';
import { CreateBookingServiceInput } from './dto/create-booking-service.input';
import { WhereBookingServiceSearchInput } from './dto/search-booking-service.input';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { bookingService, PrismaClient } from '@prisma/client';
import { UpdateBookingServiceInput } from './dto/update-booking-service.input';
import { BookingServicePagination } from './booking-service.resolver';

@Injectable()
export class BookingServiceService extends BaseService<
  bookingService,
  typeof CreateBookingServiceInput,
  typeof UpdateBookingServiceInput,
  typeof WhereBookingServiceSearchInput,
  typeof BookingServicePagination,
  PrismaClient['bookingService']
> {
  constructor(private readonly prisma: PrismaService) {
    super('BookingService', prisma.bookingService);
  }
}
