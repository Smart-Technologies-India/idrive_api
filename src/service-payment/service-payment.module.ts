import { Module } from '@nestjs/common';
import { ServicePaymentService } from './service-payment.service';
import { ServicePaymentResolver } from './service-payment.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ServicePaymentResolver, ServicePaymentService],
  exports: [ServicePaymentService],
})
export class ServicePaymentModule {}
