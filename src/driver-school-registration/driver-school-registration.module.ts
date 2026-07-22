import { Module } from '@nestjs/common';
import { DriverSchoolRegistrationService } from './driver-school-registration.service';
import { DriverSchoolRegistrationResolver } from './driver-school-registration.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [
    DriverSchoolRegistrationResolver,
    DriverSchoolRegistrationService,
  ],
  exports: [DriverSchoolRegistrationService],
})
export class DriverSchoolRegistrationModule {}
