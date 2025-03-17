import { Test, TestingModule } from '@nestjs/testing';
import { CodeTaskService } from './code-task.service';

describe('CodeTaskService', () => {
  let service: CodeTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeTaskService],
    }).compile();

    service = module.get<CodeTaskService>(CodeTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
