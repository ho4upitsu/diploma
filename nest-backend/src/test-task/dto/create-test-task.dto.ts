import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTestTaskDto {
  @ApiProperty({
    example: '67b3485fa3b63f2adbe1f3b5',
    description: 'Module ID',
  })
  @IsString()
  @IsNotEmpty()
  module_id: string;

  @ApiProperty({
    example: 'Test Task 1',
    description: 'Test Task Name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    description: 'Test Task Options',
  })
  @IsString()
  @IsNotEmpty()
  options: string[];

  @ApiProperty({
    example: 'Option 1',
    description: 'Correct Answer',
  })
  @IsString()
  @IsNotEmpty()
  correct_answer: string;
}
