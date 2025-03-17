import { Test, TestingModule } from '@nestjs/testing';
import { CodeTaskController } from './code-task.controller';
import { CodeTaskService } from './code-task.service';

describe('CodeTaskController', () => {
  let controller: CodeTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeTaskController],
      providers: [CodeTaskService],
    }).compile();

    controller = module.get<CodeTaskController>(CodeTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
