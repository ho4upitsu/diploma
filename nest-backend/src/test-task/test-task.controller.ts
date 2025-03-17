import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestTaskService } from './test-task.service';
import { CreateTestTaskDto } from './dto/create-test-task.dto';
import { UpdateTestTaskDto } from './dto/update-test-task.dto';

@Controller('test-task')
export class TestTaskController {
  constructor(private readonly testTaskService: TestTaskService) {}

  @Post('/create')
  create(@Body() createTestTaskDto: CreateTestTaskDto) {
    return this.testTaskService.create(createTestTaskDto);
  }

  @Get('/getAll')
  findAll() {
    return this.testTaskService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.testTaskService.findOne(id);
  }

  @Get('/getForModule/:id')
  findTestTasksForModule(@Param('id') id: string) {
    return this.testTaskService.findTestTasksForModule(id);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.testTaskService.remove(id);
  }
}
