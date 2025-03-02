import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ModulesModule } from './module/modules.module';
import { CodeeditorModule } from './codeeditor/codeeditor.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'as',
    ),
    UsersModule,
    ModulesModule,
    CodeeditorModule,
  ],
})
export class AppModule {}
