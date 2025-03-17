import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsMongoId,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCodeTaskDto {
  @ApiProperty({
    example: '67b3485fa3b63f2adbe1f3b5',
    description: 'Module ID',
  })
  @IsMongoId()
  @IsNotEmpty()
  module_id: string;

  @ApiProperty({
    example: 'Code Task 1',
    description: 'Code Task Name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Description for Code Task 1',
    description: 'Code Task Description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: ['promise', 'array'],
    description: 'Code Task Validation Rules',
    enum: ['promise', 'array', 'object', 'async'],
    isArray: true,
  })
  @IsArray()
  @IsEnum(['promise', 'array', 'object', 'async'], { each: true })
  validationRules: string[];
}
