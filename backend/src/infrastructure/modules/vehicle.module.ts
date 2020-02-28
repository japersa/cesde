import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { VehicleController } from '../../app/controllers/vehicle.controller';
import { VehicleProvider } from '../providers/vehicle.provider';
import { VehicleService } from '../../domain/services/vehicle.service';
import { LoggerMiddleware } from '../../app/middlewares/logger.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [VehicleController],
  providers: [VehicleService, ...VehicleProvider],
  exports: [...VehicleProvider],
})
export class VehicleModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('vehicles');
  }
}
