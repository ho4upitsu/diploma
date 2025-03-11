import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLectureDto {
  @ApiProperty({
    example: '67b3485fa3b63f2adbe1f3b5',
    description: 'Module ID',
  })
  @IsString()
  @IsNotEmpty()
  module_id: string;

  @ApiProperty({
    example: 'Lecture 1',
    description: 'Lecture Name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Content for Lecture 1',
    description: 'Lecture Content',
  })
  @IsString()
  @IsNotEmpty()
  content: string;
}
