import { Resolver, ObjectType } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { Payment } from './entities/payment.entity';
import { CreatePaymentInput } from './dto/create-payment.input';
import { SearchPaymentInput } from './dto/search-payment.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { payment, PrismaClient } from '@prisma/client';
import { UpdatePaymentInput } from './dto/update-payment.input';

@ObjectType()
export class PaymentPagination extends BasePaginated(Payment) {}

const BasePaymentResolver = createBaseResolver<
  typeof Payment,
  payment,
  typeof CreatePaymentInput,
  typeof UpdatePaymentInput,
  typeof SearchPaymentInput,
  typeof PaymentPagination,
  PrismaClient['payment']
>(
  () => Payment,
  'Payment',
  () => CreatePaymentInput,
  () => UpdatePaymentInput,
  () => SearchPaymentInput,
  () => PaymentPagination,
);

@Resolver(() => Payment)
export class PaymentResolver extends BasePaymentResolver {
  constructor(private readonly paymentService: PaymentService) {
    super(paymentService);
  }
}
