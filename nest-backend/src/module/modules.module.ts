import { Module } from '@nestjs/common';
import { ModuleService } from './modules.service';
import { ModuleController } from './modules.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleSchema } from './modules.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Module', schema: ModuleSchema }]),
  ],
  controllers: [ModuleController],
  providers: [ModuleService],
})
export class ModulesModule {}
