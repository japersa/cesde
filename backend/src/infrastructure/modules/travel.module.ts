import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { TravelController } from '../../app/controllers/travel.controller';
import { TravelProvider } from '../providers/travel.provider';
import { TravelService } from '../../domain/services/travel.service';
import { LoggerMiddleware } from '../../app/middlewares/logger.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [TravelController],
  providers: [TravelService, ...TravelProvider],
  exports: [...TravelProvider],
})
export class TravelModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('travels');
  }
}
