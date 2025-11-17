import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingResolver } from './booking.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BookingResolver, BookingService],
  exports: [BookingService],
})
export class BookingModule {}
