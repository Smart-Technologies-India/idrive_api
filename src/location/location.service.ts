import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/create-location.input';
import { SearchLocationInput } from './dto/search-location.input';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { location, PrismaClient } from '@prisma/client';
import { UpdateLocationInput } from './dto/update-location.input';
import { LocationPagination } from './location.resolver';

@Injectable()
export class LocationService extends BaseService<
  location,
  typeof CreateLocationInput,
  typeof UpdateLocationInput,
  typeof SearchLocationInput,
  typeof LocationPagination,
  PrismaClient['location']
> {
  constructor(private readonly prisma: PrismaService) {
    super('Location', prisma.location);
  }
}
