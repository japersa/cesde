import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './infrastructure/modules/driver.module';
import { VehicleModule } from './infrastructure/modules/vehicle.module';
import { TravelModule } from './infrastructure/modules/travel.module';

@Module({
  imports: [DriverModule, VehicleModule, TravelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
