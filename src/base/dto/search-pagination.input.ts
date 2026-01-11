import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class OrderBy {
  @IsString()
  @Field(() => String, { nullable: true })
  field: string;

  @IsString()
  @Field(() => String, { nullable: true })
  direction: 'asc' | 'desc';
}

@InputType()
export class SearchPaginationInput {
  @IsNumber()
  @Field(() => Int)
  skip: number;

  @IsNumber()
  @Field(() => Int)
  take: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  search: string;

  @IsOptional()
  @Field(() => [String], { nullable: true })
  filters: string[];

  @IsOptional()
  @Field(() => [OrderBy], { nullable: true })
  orderBy: OrderBy[];
}
