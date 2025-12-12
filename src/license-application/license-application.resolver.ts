import { Resolver, ObjectType } from '@nestjs/graphql';
import { LicenseApplicationService } from './license-application.service';
import { LicenseApplication } from './entities/license-application.entity';
import { CreateLicenseApplicationInput } from './dto/create-license-application.input';
import { UpdateLicenseApplicationInput } from './dto/update-license-application.input';
import { WhereLicenseApplicationSearchInput } from './dto/where-license-application-search.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { licenseApplication, PrismaClient } from '@prisma/client';

@ObjectType()
export class LicenseApplicationPagination extends BasePaginated(
  LicenseApplication,
) {}

const BaseLicenseApplicationResolver = createBaseResolver<
  typeof LicenseApplication,
  licenseApplication,
  typeof CreateLicenseApplicationInput,
  typeof UpdateLicenseApplicationInput,
  typeof WhereLicenseApplicationSearchInput,
  typeof LicenseApplicationPagination,
  PrismaClient['licenseApplication']
>(
  () => LicenseApplication,
  'LicenseApplication',
  () => CreateLicenseApplicationInput,
  () => UpdateLicenseApplicationInput,
  () => WhereLicenseApplicationSearchInput,
  () => LicenseApplicationPagination,
);

@Resolver(() => LicenseApplication)
export class LicenseApplicationResolver extends BaseLicenseApplicationResolver {
  constructor(
    private readonly licenseApplicationService: LicenseApplicationService,
  ) {
    super(licenseApplicationService);
  }
}
