import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTestTaskDto {
  @IsString()
  @IsNotEmpty()
  module_id: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  options: string[];
  @IsString()
  @IsNotEmpty()
  correct_answer: string;
}
