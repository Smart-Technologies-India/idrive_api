import { Module } from '@nestjs/common';
import { CarCourseResolver } from './car-course.resolver';
import { CarCourseService } from './car-course.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CarCourseResolver, CarCourseService],
  exports: [CarCourseService],
})
export class CarCourseModule {}
