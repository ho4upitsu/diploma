import { Module } from '@nestjs/common';
import { CodeeditorController } from './codeeditor.controller';
import { CodeService } from './codeeditor.service';

@Module({
  controllers: [CodeeditorController],
  providers: [CodeService],
})
export class CodeeditorModule {}
