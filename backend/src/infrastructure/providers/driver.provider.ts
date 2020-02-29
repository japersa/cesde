import { Driver } from '../../domain/entities/driver.entity';

export const DriverProvider = [
  {
    provide: 'DriverRepository',
    useValue: Driver,
  },
];
