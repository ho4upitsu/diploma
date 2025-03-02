import { Test, TestingModule } from '@nestjs/testing';
import { CodeeditorController } from './codeeditor.controller';
import { CodeeditorService } from './codeeditor.service';

describe('CodeeditorController', () => {
  let controller: CodeeditorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeeditorController],
      providers: [CodeeditorService],
    }).compile();

    controller = module.get<CodeeditorController>(CodeeditorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
