/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CarAdminStatus, CarCategory } from '@prisma/client';

registerEnumType(CarAdminStatus, {
  name: 'CarAdminStatus',
});

registerEnumType(CarCategory, {
  name: 'CarCategory',
});

@InputType()
export class CreateCarAdminInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  manufacturer: string;

  @IsNotEmpty()
  @IsEnum(CarCategory)
  @Field(() => CarCategory)
  category: CarCategory;

  @IsOptional()
  @IsEnum(CarAdminStatus)
  @Field(() => CarAdminStatus, { nullable: true })
  status?: CarAdminStatus;
}
