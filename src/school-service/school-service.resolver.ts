import { Resolver, ObjectType } from '@nestjs/graphql';
import { SchoolServiceService } from './school-service.service';
import { SchoolService } from './entities/school-service.entity';
import { CreateSchoolServiceInput } from './dto/create-school-service.input';
import { WhereSchoolServiceSearchInput } from './dto/search-school-service.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { schoolService, PrismaClient } from '@prisma/client';
import { UpdateSchoolServiceInput } from './dto/update-school-service.input';

@ObjectType()
export class SchoolServicePagination extends BasePaginated(SchoolService) {}

const BaseSchoolServiceResolver = createBaseResolver<
  typeof SchoolService,
  schoolService,
  typeof CreateSchoolServiceInput,
  typeof UpdateSchoolServiceInput,
  typeof WhereSchoolServiceSearchInput,
  typeof SchoolServicePagination,
  PrismaClient['schoolService']
>(
  () => SchoolService,
  'SchoolService',
  () => CreateSchoolServiceInput,
  () => UpdateSchoolServiceInput,
  () => WhereSchoolServiceSearchInput,
  () => SchoolServicePagination,
);

@Resolver(() => SchoolService)
export class SchoolServiceResolver extends BaseSchoolServiceResolver {
  constructor(private readonly schoolServiceService: SchoolServiceService) {
    super(schoolServiceService);
  }
}
