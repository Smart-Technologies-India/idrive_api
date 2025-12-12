import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { UtilsResolver } from './utils.resolver';

@Module({
  providers: [UtilsResolver, UtilsService],
})
export class UtilsModule {}
