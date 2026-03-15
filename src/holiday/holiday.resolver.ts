import { Resolver, ObjectType, ResolveField, Parent } from '@nestjs/graphql';
import { HolidayService } from './holiday.service';
import { Holiday } from './entities/holiday.entity';
import { CreateHolidayInput } from './dto/create-holiday.input';
import { SearchHolidayInput } from './dto/search-holiday.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { PrismaClient } from '@prisma/client';
import type { holiday } from '@prisma/client';
import { UpdateHolidayInput } from './dto/update-holiday.input';

@ObjectType()
export class HolidayPagination extends BasePaginated(Holiday) {}

const BaseHolidayResolver = createBaseResolver<
  typeof Holiday,
  holiday,
  typeof CreateHolidayInput,
  typeof UpdateHolidayInput,
  typeof SearchHolidayInput,
  typeof HolidayPagination,
  PrismaClient['holiday']
>(
  () => Holiday,
  'Holiday',
  () => CreateHolidayInput,
  () => UpdateHolidayInput,
  () => SearchHolidayInput,
  () => HolidayPagination,
);

@Resolver(() => Holiday)
export class HolidayResolver extends BaseHolidayResolver {
  constructor(private readonly holidayService: HolidayService) {
    super(holidayService);
  }

  @ResolveField('slots', () => [String], { nullable: true })
  resolveSlots(@Parent() holiday: holiday): string[] | null {
    if (!holiday.slots) return null;

    try {
      // Parse JSON string from database (e.g., "[\"07:00-08:00\"]") into array
      return typeof holiday.slots === 'string'
        ? (JSON.parse(holiday.slots) as string[])
        : holiday.slots;
    } catch (error) {
      console.error('Error parsing slots JSON:', error);
      return null;
    }
  }
}
