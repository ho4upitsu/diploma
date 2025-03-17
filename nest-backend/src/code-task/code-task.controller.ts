import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { CodeTaskService } from './code-task.service';
import { CreateCodeTaskDto } from './dto/code-task.dto';

@Controller('code-task')
export class CodeTaskController {
  constructor(private readonly codeTaskService: CodeTaskService) {}

  @Post('/create')
  create(@Body() createCodeTaskDto: CreateCodeTaskDto) {
    return this.codeTaskService.create(createCodeTaskDto);
  }

  @Get('/getAll')
  findAll() {
    return this.codeTaskService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.codeTaskService.findOne(id);
  }

  @Get('/getForModule/:id')
  findCodeTaskForModule(@Param('id') id: string) {
    return this.codeTaskService.findCodeTaskForModule(id);
  }

  @Post('/execute')
  executeCodeTask(@Body() code: string) {
    return this.codeTaskService.executeCodeTask(code);
  }
}
