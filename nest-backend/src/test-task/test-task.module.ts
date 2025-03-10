import { Module } from '@nestjs/common';
import { TestTaskService } from './test-task.service';
import { TestTaskController } from './test-task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleSchema } from '../module/modules.schema';
import { TestTaskSchema } from './test-task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Module', schema: ModuleSchema }]),
    MongooseModule.forFeature([{ name: 'TestTask', schema: TestTaskSchema }]),
  ],
  controllers: [TestTaskController],
  providers: [TestTaskService],
})
export class TestTaskModule {}
