import { Sequelize } from 'sequelize-typescript';
import { Driver } from '../../domain/entities/driver.entity';
import { join } from 'path';
import { Vehicle } from 'src/domain/entities/vehicle.entity';
import { Travel } from 'src/domain/entities/travel.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: join(__dirname, '..', '..', '..', 'db.sqlite'),
      });
      sequelize.addModels([Driver, Vehicle, Travel]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
