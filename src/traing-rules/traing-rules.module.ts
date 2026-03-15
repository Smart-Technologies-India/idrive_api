import { Module } from '@nestjs/common';
import { TraingRulesService } from './traing-rules.service';
import { TraingRulesResolver } from './traing-rules.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TraingRulesResolver, TraingRulesService],
  exports: [TraingRulesService],
})
export class TraingRulesModule {}
