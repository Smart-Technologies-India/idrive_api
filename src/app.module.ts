import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UploaderModule } from './uploader/uploader.module';
import { SchoolModule } from './school/school.module';
import { DriverModule } from './driver/driver.module';
import { LeaveHistoryModule } from './leave-history/leave-history.module';
import { SalaryHistoryModule } from './salary-history/salary-history.module';
import { CarModule } from './car/car.module';
import { CourseModule } from './course/course.module';
import { SyllabusModule } from './syllabus/syllabus.module';
import { HolidayModule } from './holiday/holiday.module';
import { ServiceModule } from './service/service.module';
import { BookingModule } from './booking/booking.module';
import { BookingSessionModule } from './booking-session/booking-session.module';
import { BookingServiceModule } from './booking-service/booking-service.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      sortSchema: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/public',
      rootPath: join(process.cwd(), 'public'),
    }),
    PrismaModule,
    UploaderModule,
    AuthModule,
    UserModule,
    SchoolModule,
    DriverModule,
    LeaveHistoryModule,
    SalaryHistoryModule,
    CarModule,
    CourseModule,
    SyllabusModule,
    HolidayModule,
    ServiceModule,
    BookingModule,
    BookingSessionModule,
    BookingServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
