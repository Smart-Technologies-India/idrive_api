import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { SchoolServiceStatus } from '@prisma/client';
import { School } from 'src/school/entities/school.entity';
import { Service } from 'src/service/entities/service.entity';

registerEnumType(SchoolServiceStatus, {
  name: 'SchoolServiceStatus',
});

@ObjectType()
export class SchoolService {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  schoolId: number;

  @Field(() => Int)
  serviceId: number;

  @Field(() => String)
  schoolServiceId: string;

  @Field(() => Float)
  licensePrice: number;

  @Field(() => Float)
  addonPrice: number;

  @Field(() => String)
  status: SchoolServiceStatus;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  // Relations
  @Field(() => School, { nullable: true })
  school?: School;

  @Field(() => Service, { nullable: true })
  service?: Service;
}
