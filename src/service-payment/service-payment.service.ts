import { Injectable } from '@nestjs/common';
import { CreateServicePaymentInput } from './dto/create-service-payment.input';
import { SearchServicePaymentInput } from './dto/search-service-payment.input';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { servicePayment, PrismaClient } from '@prisma/client';
import { ServicePaymentPagination } from './service-payment.resolver';
import { UpdateServicePaymentInput } from './dto/update-service-payment.input';

@Injectable()
export class ServicePaymentService extends BaseService<
  servicePayment,
  typeof CreateServicePaymentInput,
  typeof UpdateServicePaymentInput,
  typeof SearchServicePaymentInput,
  typeof ServicePaymentPagination,
  PrismaClient['servicePayment']
> {
  constructor(private readonly prisma: PrismaService) {
    super('ServicePayment', prisma.servicePayment);
  }
}
