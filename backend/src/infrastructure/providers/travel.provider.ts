import { Travel } from '../../domain/entities/travel.entity';

export const TravelProvider = [
  {
    provide: 'TravelRepository',
    useValue: Travel,
  },
];
