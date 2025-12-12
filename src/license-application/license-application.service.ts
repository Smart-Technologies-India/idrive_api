import { Injectable } from '@nestjs/common';
import { CreateLicenseApplicationInput } from './dto/create-license-application.input';
import { UpdateLicenseApplicationInput } from './dto/update-license-application.input';
import { WhereLicenseApplicationSearchInput } from './dto/where-license-application-search.input';
import { BaseService } from 'src/base/base.service';
import { LicenseApplicationPagination } from './license-application.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { licenseApplication, PrismaClient } from '@prisma/client';

@Injectable()
export class LicenseApplicationService extends BaseService<
  licenseApplication,
  typeof CreateLicenseApplicationInput,
  typeof UpdateLicenseApplicationInput,
  typeof WhereLicenseApplicationSearchInput,
  typeof LicenseApplicationPagination,
  PrismaClient['licenseApplication']
> {
  constructor(private readonly prisma: PrismaService) {
    super('LicenseApplication', prisma.licenseApplication);
  }
}
