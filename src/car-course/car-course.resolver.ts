import { Resolver, ObjectType } from '@nestjs/graphql';
import { CarCourseService } from './car-course.service';
import { CarCourse } from './entities/car-course.entity';
import { CreateCarCourseInput } from './dto/create-car-course.input';
import { SearchCarCourseInput } from './dto/search-car-course.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { carCourse, PrismaClient } from '@prisma/client';
import { UpdateCarCourseInput } from './dto/update-car-course.input';

@ObjectType()
export class CarCoursePagination extends BasePaginated(CarCourse) {}

const BaseCarCourseResolver = createBaseResolver<
  typeof CarCourse,
  carCourse,
  typeof CreateCarCourseInput,
  typeof UpdateCarCourseInput,
  typeof SearchCarCourseInput,
  typeof CarCoursePagination,
  PrismaClient['carCourse']
>(
  () => CarCourse,
  'CarCourse',
  () => CreateCarCourseInput,
  () => UpdateCarCourseInput,
  () => SearchCarCourseInput,
  () => CarCoursePagination,
);

@Resolver(() => CarCourse)
export class CarCourseResolver extends BaseCarCourseResolver {
  constructor(private readonly carCourseService: CarCourseService) {
    super(carCourseService);
  }
}
