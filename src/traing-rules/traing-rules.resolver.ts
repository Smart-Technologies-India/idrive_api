import { Resolver, ObjectType } from '@nestjs/graphql';
import { TraingRulesService } from './traing-rules.service';
import { TraingRules } from './entities/traing-rules.entity';
import { CreateTraingRulesInput } from './dto/create-traing-rules.input';
import { UpdateTraingRulesInput } from './dto/update-traing-rules.input';
import { SearchTraingRulesInput } from './dto/search-traing-rules.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { PrismaClient } from '@prisma/client';
import type { traingRules as PrismaTraingRules } from '@prisma/client';

@ObjectType()
export class TraingRulesPagination extends BasePaginated(TraingRules) {}

const BaseTraingRulesResolver = createBaseResolver<
  typeof TraingRules,
  PrismaTraingRules,
  typeof CreateTraingRulesInput,
  typeof UpdateTraingRulesInput,
  typeof SearchTraingRulesInput,
  typeof TraingRulesPagination,
  PrismaClient['traingRules']
>(
  () => TraingRules,
  'TraingRules',
  () => CreateTraingRulesInput,
  () => UpdateTraingRulesInput,
  () => SearchTraingRulesInput,
  () => TraingRulesPagination,
);

@Resolver(() => TraingRules)
export class TraingRulesResolver extends BaseTraingRulesResolver {
  constructor(private readonly traingRulesService: TraingRulesService) {
    super(traingRulesService);
  }
}
