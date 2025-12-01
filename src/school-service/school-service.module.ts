import { Module } from '@nestjs/common';
import { SchoolServiceService } from './school-service.service';
import { SchoolServiceResolver } from './school-service.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SchoolServiceResolver, SchoolServiceService],
  exports: [SchoolServiceService],
})
export class SchoolServiceModule {}
