import { Injectable } from '@nestjs/common';
import { CreateCarCourseInput } from './dto/create-car-course.input';
import { SearchCarCourseInput } from './dto/search-car-course.input';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { carCourse, PrismaClient } from '@prisma/client';
import { CarCoursePagination } from './car-course.resolver';
import { UpdateCarCourseInput } from './dto/update-car-course.input';

@Injectable()
export class CarCourseService extends BaseService<
  carCourse,
  typeof CreateCarCourseInput,
  typeof UpdateCarCourseInput,
  typeof SearchCarCourseInput,
  typeof CarCoursePagination,
  PrismaClient['carCourse']
> {
  constructor(private readonly prisma: PrismaService) {
    super('CarCourse', prisma.carCourse);
  }
}
