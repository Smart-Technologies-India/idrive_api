import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

export enum ServiceType {
  LICENSE = 'LICENSE',
  ADDON = 'ADDON',
}

export enum ServiceStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  UPCOMING = 'UPCOMING',
  DISCONTINUED = 'DISCONTINUED',
}

registerEnumType(ServiceType, {
  name: 'ServiceType',
});

registerEnumType(ServiceStatus, {
  name: 'ServiceStatus',
});

@ObjectType()
export class Service {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  serviceId: string;

  // Basic Information
  @Field(() => String)
  serviceName: string;

  @Field(() => String)
  category: string;

  // Pricing & Duration
  @Field(() => Int)
  duration: number;

  // Service Details
  @Field(() => String)
  description: string;

  @Field(() => String, { nullable: true })
  features?: string;

  @Field(() => String, { nullable: true })
  includedServices?: string;

  @Field(() => String, { nullable: true })
  requirements?: string;

  @Field(() => String, { nullable: true })
  termsAndConditions?: string;

  // Status
  @Field(() => ServiceStatus)
  status: ServiceStatus;

  // Timestamps
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
