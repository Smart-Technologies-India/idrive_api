import { Resolver, ObjectType } from '@nestjs/graphql';
import { CarAdminService } from './car-admin.service';
import { CarAdmin } from './entities/car-admin.entity';
import { CreateCarAdminInput } from './dto/create-car-admin.input';
import { WhereCarAdminSearchInput } from './dto/search-car-admin.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { carAdmin, PrismaClient } from '@prisma/client';
import { UpdateCarAdminInput } from './dto/update-car-admin.input';

@ObjectType()
export class CarAdminPagination extends BasePaginated(CarAdmin) {}

const BaseCarAdminResolver = createBaseResolver<
  typeof CarAdmin,
  carAdmin,
  typeof CreateCarAdminInput,
  typeof UpdateCarAdminInput,
  typeof WhereCarAdminSearchInput,
  typeof CarAdminPagination,
  PrismaClient['carAdmin']
>(
  () => CarAdmin,
  'CarAdmin',
  () => CreateCarAdminInput,
  () => UpdateCarAdminInput,
  () => WhereCarAdminSearchInput,
  () => CarAdminPagination,
);

@Resolver(() => CarAdmin)
export class CarAdminResolver extends BaseCarAdminResolver {
  constructor(private readonly carAdminService: CarAdminService) {
    super(carAdminService);
  }
}
