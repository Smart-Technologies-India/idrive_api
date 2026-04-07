import { Resolver, ObjectType } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/create-location.input';
import { SearchLocationInput } from './dto/search-location.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { PrismaClient } from '@prisma/client';
import type { location } from '@prisma/client';
import { UpdateLocationInput } from './dto/update-location.input';

@ObjectType()
export class LocationPagination extends BasePaginated(Location) {}

const BaseLocationResolver = createBaseResolver<
  typeof Location,
  location,
  typeof CreateLocationInput,
  typeof UpdateLocationInput,
  typeof SearchLocationInput,
  typeof LocationPagination,
  PrismaClient['location']
>(
  () => Location,
  'Location',
  () => CreateLocationInput,
  () => UpdateLocationInput,
  () => SearchLocationInput,
  () => LocationPagination,
);

@Resolver(() => Location)
export class LocationResolver extends BaseLocationResolver {
  constructor(private readonly locationService: LocationService) {
    super(locationService);
  }
}
