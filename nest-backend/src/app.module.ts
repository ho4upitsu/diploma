import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ModulesModule } from './module/modules.module';
import { TestTaskModule } from './test-task/test-task.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LectureModule } from './lecture/lecture.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
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
    TestTaskModule,
    LectureModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
