import { Resolver, Query } from '@nestjs/graphql';
import { UtilsService } from './utils.service';
import { Util } from './entities/util.entity';

@Resolver(() => Util)
export class UtilsResolver {
  constructor(private readonly utilsService: UtilsService) {}

  @Query(() => Util)
  getServerDateTime() {
    return this.utilsService.getServerDateTime();
  }
}
