import {
  Controller,
  Get,
  Post,
  Body,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { CreateVehicleDto } from '../../domain/dto/create-vehicle.dto';
import { VehicleService } from '../../domain/services/vehicle.service';
import { Vehicle } from '../../domain/entities/vehicle.entity';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  public async create(
    @Response() res,
    @Body() createVehicleDto: CreateVehicleDto,
  ) {
    const user = await this.vehicleService.create(createVehicleDto);
    return res.status(HttpStatus.OK).json(user);
  }

  @Get()
  async findAll(): Promise<Vehicle[]> {
    return await this.vehicleService.findAll();
  }
}
