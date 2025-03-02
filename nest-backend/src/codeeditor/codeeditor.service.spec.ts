import { Test, TestingModule } from '@nestjs/testing';
import { CodeeditorService } from './codeeditor.service';

describe('CodeeditorService', () => {
  let service: CodeeditorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeeditorService],
    }).compile();

    service = module.get<CodeeditorService>(CodeeditorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
