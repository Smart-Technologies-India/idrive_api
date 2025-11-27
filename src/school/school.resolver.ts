import { Resolver, ObjectType, Query, Args, Int } from '@nestjs/graphql';
import { SchoolService } from './school.service';
import { School } from './entities/school.entity';
import { CreateSchoolInput } from './dto/create-school.input';
import { WhereSchoolSearchInput } from './dto/search-school.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { school, PrismaClient } from '@prisma/client';
import { UpdateSchoolInput } from './dto/update-school.input';
import { SchoolStatistics } from './entities/school-statistics.entity';
import { SchoolWithCounts } from './entities/school-with-counts.entity';
import { SchoolDashboardStats } from './entities/school-dashboard-stats.entity';

@ObjectType()
export class SchoolPagination extends BasePaginated(School) {}

const BaseSchoolResolver = createBaseResolver<
  typeof School,
  school,
  typeof CreateSchoolInput,
  typeof UpdateSchoolInput,
  typeof WhereSchoolSearchInput,
  typeof SchoolPagination,
  PrismaClient['school']
>(
  () => School,
  'School',
  () => CreateSchoolInput,
  () => UpdateSchoolInput,
  () => WhereSchoolSearchInput,
  () => SchoolPagination,
);

@Resolver(() => School)
export class SchoolResolver extends BaseSchoolResolver {
  constructor(private readonly schoolService: SchoolService) {
    super(schoolService);
  }

  @Query(() => SchoolStatistics, { name: 'getSchoolStatistics' })
  async getSchoolStatistics(): Promise<SchoolStatistics> {
    const stats: SchoolStatistics = await this.schoolService.getStatistics();
    return stats;
  }

  @Query(() => [SchoolWithCounts], { name: 'getAllSchoolWithCounts' })
  async getAllSchoolWithCounts(): Promise<SchoolWithCounts[]> {
    const schools: SchoolWithCounts[] =
      await this.schoolService.getAllSchoolsWithCounts();
    return schools;
  }

  @Query(() => SchoolDashboardStats, { name: 'getSchoolDashboardStats' })
  getSchoolDashboardStats(
    @Args('schoolId', { type: () => Int }) schoolId: number,
  ): Promise<SchoolDashboardStats> {
    return this.schoolService.getDashboardStats(schoolId);
  }
}
