import { Vehicle } from '../../domain/entities/vehicle.entity';

export const VehicleProvider = [
  {
    provide: 'VehicleRepository',
    useValue: Vehicle,
  },
];
