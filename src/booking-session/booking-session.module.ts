import { Module } from '@nestjs/common';
import { BookingSessionService } from './booking-session.service';
import { BookingSessionResolver } from './booking-session.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BookingSessionResolver, BookingSessionService],
  exports: [BookingSessionService],
})
export class BookingSessionModule {}
