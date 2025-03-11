import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateModuleDto {
  @ApiProperty({
    example: 'Module 1',
    description: 'Module name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Description for Module 1',
    description: 'Module description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
