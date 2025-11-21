import { Resolver, ObjectType } from '@nestjs/graphql';
import { BookingServiceService } from './booking-service.service';
import { BookingService } from './entities/booking-service.entity';
import { CreateBookingServiceInput } from './dto/create-booking-service.input';
import { WhereBookingServiceSearchInput } from './dto/search-booking-service.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { bookingService, PrismaClient } from '@prisma/client';
import { UpdateBookingServiceInput } from './dto/update-booking-service.input';

@ObjectType()
export class BookingServicePagination extends BasePaginated(BookingService) {}

const BaseBookingServiceResolver = createBaseResolver<
  typeof BookingService,
  bookingService,
  typeof CreateBookingServiceInput,
  typeof UpdateBookingServiceInput,
  typeof WhereBookingServiceSearchInput,
  typeof BookingServicePagination,
  PrismaClient['bookingService']
>(
  () => BookingService,
  'BookingService',
  () => CreateBookingServiceInput,
  () => UpdateBookingServiceInput,
  () => WhereBookingServiceSearchInput,
  () => BookingServicePagination,
);

@Resolver(() => BookingService)
export class BookingServiceResolver extends BaseBookingServiceResolver {
  constructor(private readonly bookingServiceService: BookingServiceService) {
    super(bookingServiceService);
  }
}
