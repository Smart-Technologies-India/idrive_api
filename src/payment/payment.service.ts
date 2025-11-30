import { Injectable } from '@nestjs/common';
import { CreatePaymentInput } from './dto/create-payment.input';
import { SearchPaymentInput } from './dto/search-payment.input';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { payment, PrismaClient } from '@prisma/client';
import { PaymentPagination } from './payment.resolver';
import { UpdatePaymentInput } from './dto/update-payment.input';

@Injectable()
export class PaymentService extends BaseService<
  payment,
  typeof CreatePaymentInput,
  typeof UpdatePaymentInput,
  typeof SearchPaymentInput,
  typeof PaymentPagination,
  PrismaClient['payment']
> {
  constructor(private readonly prisma: PrismaService) {
    super('Payment', prisma.payment);
  }
}
