import { Module } from '@nestjs/common';
import { BookingServiceService } from './booking-service.service';
import { BookingServiceResolver } from './booking-service.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BookingServiceResolver, BookingServiceService],
  exports: [BookingServiceService],
})
export class BookingServiceModule {}
