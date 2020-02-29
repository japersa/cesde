import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { CreateTravelDto } from '../dto/create-travel.dto';
import { Travel } from '../entities/travel.entity';
import { Vehicle } from '../entities/vehicle.entity';
import { Driver } from '../entities/driver.entity';

@Injectable()
export class TravelService {
  constructor(
    @Inject('TravelRepository')
    private readonly travelRepository: typeof Travel,
  ) {}

  async create(createTravelDto: CreateTravelDto): Promise<Travel> {
    const checkDateAvailableDriver = await this.travelRepository.findOne<
      Travel
    >({
      where: {
        driverId: createTravelDto.driverId,
        travel_date: createTravelDto.travel_date,
      },
    });

    const checkDateAvailableVehicle = await this.travelRepository.findOne<
      Travel
    >({
      where: {
        vehicleId: createTravelDto.vehicleId,
        travel_date: createTravelDto.travel_date,
      },
    });

    if (checkDateAvailableDriver) {
      throw new HttpException(
        'El conductor ya tiene registrado un viaje para esta fecha',
        HttpStatus.CONFLICT,
      );
    } else if (checkDateAvailableVehicle) {
      throw new HttpException(
        'El vehiculo ya tiene registrado un viaje para esta fecha',
        HttpStatus.CONFLICT,
      );
    } else {
      const travel = new Travel();
      travel.driverId = createTravelDto.driverId;
      travel.vehicleId = createTravelDto.vehicleId;
      travel.number_services = createTravelDto.number_services;
      travel.money_raised = createTravelDto.money_raised;
      travel.travel_date = createTravelDto.travel_date;
      return await travel.save();
    }
  }

  async findAll(): Promise<Travel[]> {
    return await this.travelRepository.findAll<Travel>({
      include: [{ model: Driver }, { model: Vehicle }],
    });
  }
}
