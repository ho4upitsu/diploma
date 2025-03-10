import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ModulesModule } from './module/modules.module';
import { CodeeditorModule } from './codeeditor/codeeditor.module';
import { TestTaskModule } from './test-task/test-task.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    UsersModule,
    ModulesModule,
    CodeeditorModule,
    TestTaskModule,
  ],
})
export class AppModule {}
