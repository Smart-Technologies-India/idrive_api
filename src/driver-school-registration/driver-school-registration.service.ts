import { Injectable } from '@nestjs/common';
import { CreateDriverSchoolRegistrationInput } from './dto/create-driver-school-registration.input';
import { WhereDriverSchoolRegistrationSearchInput } from './dto/search-driver-school-registration.input';
import { BaseService } from 'src/base/base.service';
import { DriverSchoolRegistrationPagination } from './driver-school-registration.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateDriverSchoolRegistrationInput } from './dto/update-driver-school-registration.input';

@Injectable()
export class DriverSchoolRegistrationService extends BaseService<
  any,
  typeof CreateDriverSchoolRegistrationInput,
  typeof UpdateDriverSchoolRegistrationInput,
  typeof WhereDriverSchoolRegistrationSearchInput,
  typeof DriverSchoolRegistrationPagination,
  any
> {
  constructor(private readonly prisma: PrismaService) {
    super('DriverSchoolRegistration', prisma.driverSchoolRegistration);
  }
}
