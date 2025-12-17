import { Resolver, ObjectType } from '@nestjs/graphql';
import { ServicePaymentService } from './service-payment.service';
import { ServicePayment } from './entities/service-payment.entity';
import { CreateServicePaymentInput } from './dto/create-service-payment.input';
import { SearchServicePaymentInput } from './dto/search-service-payment.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { servicePayment, PrismaClient } from '@prisma/client';
import { UpdateServicePaymentInput } from './dto/update-service-payment.input';

@ObjectType()
export class ServicePaymentPagination extends BasePaginated(ServicePayment) {}

const BaseServicePaymentResolver = createBaseResolver<
  typeof ServicePayment,
  servicePayment,
  typeof CreateServicePaymentInput,
  typeof UpdateServicePaymentInput,
  typeof SearchServicePaymentInput,
  typeof ServicePaymentPagination,
  PrismaClient['servicePayment']
>(
  () => ServicePayment,
  'ServicePayment',
  () => CreateServicePaymentInput,
  () => UpdateServicePaymentInput,
  () => SearchServicePaymentInput,
  () => ServicePaymentPagination,
);

@Resolver(() => ServicePayment)
export class ServicePaymentResolver extends BaseServicePaymentResolver {
  constructor(private readonly servicePaymentService: ServicePaymentService) {
    super(servicePaymentService);
  }
}
