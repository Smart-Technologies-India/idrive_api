import { Resolver, ObjectType } from '@nestjs/graphql';
import { DriverSchoolRegistrationService } from './driver-school-registration.service';
import { DriverSchoolRegistration } from './entities/driver-school-registration.entity';
import { CreateDriverSchoolRegistrationInput } from './dto/create-driver-school-registration.input';
import { WhereDriverSchoolRegistrationSearchInput } from './dto/search-driver-school-registration.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { UpdateDriverSchoolRegistrationInput } from './dto/update-driver-school-registration.input';

@ObjectType()
export class DriverSchoolRegistrationPagination extends BasePaginated(
  DriverSchoolRegistration,
) {}

const BaseDriverSchoolRegistrationResolver = createBaseResolver<
  typeof DriverSchoolRegistration,
  any,
  typeof CreateDriverSchoolRegistrationInput,
  typeof UpdateDriverSchoolRegistrationInput,
  typeof WhereDriverSchoolRegistrationSearchInput,
  typeof DriverSchoolRegistrationPagination,
  any
>(
  () => DriverSchoolRegistration,
  'DriverSchoolRegistration',
  () => CreateDriverSchoolRegistrationInput,
  () => UpdateDriverSchoolRegistrationInput,
  () => WhereDriverSchoolRegistrationSearchInput,
  () => DriverSchoolRegistrationPagination,
);

@Resolver(() => DriverSchoolRegistration)
export class DriverSchoolRegistrationResolver extends BaseDriverSchoolRegistrationResolver {
  constructor(
    private readonly driverSchoolRegistrationService: DriverSchoolRegistrationService,
  ) {
    super(driverSchoolRegistrationService);
  }
}
