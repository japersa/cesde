import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { DriverController } from '../../app/controllers/driver.controller';
import { DriverProvider } from '../providers/driver.provider';
import { DriverService } from '../../domain/services/driver.service';
import { LoggerMiddleware } from '../../app/middlewares/logger.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [DriverController],
  providers: [DriverService, ...DriverProvider],
  exports: [...DriverProvider],
})
export class DriverModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('drivers');
  }
}
