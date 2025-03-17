import { Module } from '@nestjs/common';
import { CodeTaskService } from './code-task.service';
import { CodeTaskController } from './code-task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleSchema } from 'src/module/entities/modules.schema';
import { CodeTaskSchema } from './entities/code-task.schema';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CodeTask', schema: CodeTaskSchema }]),
    MongooseModule.forFeature([{ name: 'Module', schema: ModuleSchema }]),
    HttpModule,
  ],
  controllers: [CodeTaskController],
  providers: [CodeTaskService],
})
export class CodeTaskModule {}
