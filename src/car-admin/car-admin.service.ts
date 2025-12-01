import { Injectable } from '@nestjs/common';
import { CreateCarAdminInput } from './dto/create-car-admin.input';
import { WhereCarAdminSearchInput } from './dto/search-car-admin.input';
import { BaseService } from 'src/base/base.service';
import { CarAdminPagination } from './car-admin.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { carAdmin, PrismaClient } from '@prisma/client';
import { UpdateCarAdminInput } from './dto/update-car-admin.input';

@Injectable()
export class CarAdminService extends BaseService<
  carAdmin,
  typeof CreateCarAdminInput,
  typeof UpdateCarAdminInput,
  typeof WhereCarAdminSearchInput,
  typeof CarAdminPagination,
  PrismaClient['carAdmin']
> {
  constructor(private readonly prisma: PrismaService) {
    super('CarAdmin', prisma.carAdmin);
  }
}
