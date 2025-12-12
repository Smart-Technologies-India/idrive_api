import { Module } from '@nestjs/common';
import { LicenseApplicationService } from './license-application.service';
import { LicenseApplicationResolver } from './license-application.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LicenseApplicationResolver, LicenseApplicationService],
  exports: [LicenseApplicationService],
})
export class LicenseApplicationModule {}
