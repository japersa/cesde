import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { UserController } from '../../app/controllers/user.controller';
import { UserProvider } from '../../infrastructure/providers/user.provider';
import { UserService } from '../../domain/services/user.service';
import { LoggerMiddleware } from '../../app/middlewares/logger.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...UserProvider],
  exports: [...UserProvider],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
