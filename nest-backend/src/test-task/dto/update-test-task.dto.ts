import { PartialType } from '@nestjs/mapped-types';
import { CreateTestTaskDto } from './create-test-task.dto';

export class UpdateTestTaskDto extends PartialType(CreateTestTaskDto) {}
