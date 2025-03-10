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

  @Post('/createTestTask')
  create(@Body() createTestTaskDto: CreateTestTaskDto) {
    return this.testTaskService.create(createTestTaskDto);
  }

  @Get('/getAllTestTasks')
  findAll() {
    return this.testTaskService.findAll();
  }

  @Get('/getTestTask/:id')
  findOne(@Param('id') id: string) {
    return this.testTaskService.findOne(id);
  }

  //TODO: this thing
  // @Patch('/updateTestTask/:id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateTestTaskDto: UpdateTestTaskDto,
  // ) {
  //   return this.testTaskService.update(id, updateTestTaskDto);
  // }

  @Delete('/deleteTestTask/:id')
  remove(@Param('id') id: string) {
    return this.testTaskService.remove(id);
  }
}
