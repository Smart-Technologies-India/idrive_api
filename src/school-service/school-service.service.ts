import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateSchoolServiceInput } from './dto/create-school-service.input';
import { WhereSchoolServiceSearchInput } from './dto/search-school-service.input';
import { BaseService } from 'src/base/base.service';
import { SchoolServicePagination } from './school-service.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { schoolService, PrismaClient } from '@prisma/client';
import { UpdateSchoolServiceInput } from './dto/update-school-service.input';
import { SelectedFields } from 'src/utils/methods';

@Injectable()
export class SchoolServiceService extends BaseService<
  schoolService,
  typeof CreateSchoolServiceInput,
  typeof UpdateSchoolServiceInput,
  typeof WhereSchoolServiceSearchInput,
  typeof SchoolServicePagination,
  PrismaClient['schoolService']
> {
  constructor(private readonly prisma: PrismaService) {
    super('SchoolService', prisma.schoolService);
  }

  private async generateSchoolServiceId(): Promise<string> {
    const prefix = 'SCHSRV';
    let isUnique = false;
    let schoolServiceId = '';

    while (!isUnique) {
      const randomNum = Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, '0');
      schoolServiceId = `${prefix}${randomNum}`;

      const existing = await this.prisma.schoolService.findUnique({
        where: { schoolServiceId },
      });

      if (!existing) {
        isUnique = true;
      }
    }

    return schoolServiceId;
  }

  override async create(
    input: typeof CreateSchoolServiceInput,
    fields: SelectedFields,
  ): Promise<schoolService> {
    try {
      const schoolServiceId = await this.generateSchoolServiceId();

      // Convert input type to actual instance data
      const inputData = input as unknown as CreateSchoolServiceInput;

      const item = await this.prisma.schoolService.create({
        data: {
          ...inputData,
          schoolServiceId,
        },
        select: fields,
      });

      if (!item) {
        throw new BadRequestException('Could not create SchoolService');
      }
      return item as unknown as schoolService;
    } catch (error) {
      throw new BadRequestException(`error: ${error}`);
    }
  }

  protected getIncludeRelations() {
    return {
      school: true,
      service: true,
    };
  }
}
