import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ModulesModule } from './module/modules.module';
import { CodeeditorModule } from './codeeditor/codeeditor.module';
import { TestTaskModule } from './test-task/test-task.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LectureModule } from './lecture/lecture.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ОБОВ'ЯЗКОВО!
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'), // Беремо URL з .env
      }),
    }),
    UsersModule,
    ModulesModule,
    CodeeditorModule,
    TestTaskModule,
    LectureModule,
  ],
})
export class AppModule {}
