import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

@InputType()
export class SearchSyllabusInput {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  courseId?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => Int, { nullable: true })
  dayNumber?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  title?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  syllabusId?: string;
}
