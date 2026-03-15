import { Injectable } from '@nestjs/common';
import { CreateTraingRulesInput } from './dto/create-traing-rules.input';
import { UpdateTraingRulesInput } from './dto/update-traing-rules.input';
import { SearchTraingRulesInput } from './dto/search-traing-rules.input';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { traingRules, PrismaClient } from '@prisma/client';
import { TraingRulesPagination } from './traing-rules.resolver';

@Injectable()
export class TraingRulesService extends BaseService<
  traingRules,
  typeof CreateTraingRulesInput,
  typeof UpdateTraingRulesInput,
  typeof SearchTraingRulesInput,
  typeof TraingRulesPagination,
  PrismaClient['traingRules']
> {
  constructor(private readonly prisma: PrismaService) {
    super('TraingRules', prisma.traingRules);
  }
}
