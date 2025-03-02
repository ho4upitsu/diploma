import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ModulesModule } from './module/modules.module';
import { CodeeditorModule } from './codeeditor/codeeditor.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://diploma:diploma@diploma.equ1p.mongodb.net/?retryWrites=true&w=majority&appName=diploma',
    ),
    UsersModule,
    ModulesModule,
    CodeeditorModule,
  ],
})
export class AppModule {}
