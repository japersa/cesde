import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CreateVehicleDto } from '../dto/create-vehicle.dto';
import { Vehicle } from '../entities/vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @Inject('VehicleRepository')
    private readonly vehicleRepository: typeof Vehicle,
  ) {}

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const vehicle = new Vehicle();
    vehicle.number_plate = createVehicleDto.number_plate;
    vehicle.brand = createVehicleDto.brand;
    vehicle.model = createVehicleDto.model;
    return await vehicle.save();
  }

  async findAll(): Promise<Vehicle[]> {
    return await this.vehicleRepository.findAll<Vehicle>();
  }
}
