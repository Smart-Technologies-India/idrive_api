import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { BookingService } from 'src/booking-service/entities/booking-service.entity';

export enum LicenseApplicationStatus {
  PENDING = 'PENDING',
  CLOSED = 'CLOSED',
  LL_APPLIED = 'LL_APPLIED',
  DL_PENDING = 'DL_PENDING',
  DL_APPLIED = 'DL_APPLIED',
}

export enum TestStatus {
  NONE = 'NONE',
  PASSED = 'PASSED',
  FAILED = 'FAILED',
  ABSENT = 'ABSENT',
}

registerEnumType(LicenseApplicationStatus, {
  name: 'LicenseApplicationStatus',
});

registerEnumType(TestStatus, {
  name: 'TestStatus',
});

@ObjectType()
export class LicenseApplication {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  bookingServiceId: number;

  @Field(() => String, { nullable: true })
  llNumber?: string;

  @Field(() => Date, { nullable: true })
  issuedDate?: Date;

  @Field(() => String, { nullable: true })
  dlApplicationNumber?: string;

  @Field(() => Date, { nullable: true })
  testDate?: Date;

  @Field(() => TestStatus)
  testStatus: TestStatus;

  @Field(() => LicenseApplicationStatus)
  status: LicenseApplicationStatus;

  // Relations
  @Field(() => BookingService, { nullable: true })
  bookingService?: BookingService;
}
