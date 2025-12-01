import { Module } from '@nestjs/common';
import { CarAdminService } from './car-admin.service';
import { CarAdminResolver } from './car-admin.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CarAdminResolver, CarAdminService],
  exports: [CarAdminService],
})
export class CarAdminModule {}
