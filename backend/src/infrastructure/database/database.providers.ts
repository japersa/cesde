import { Sequelize } from 'sequelize-typescript';
import { User } from '../../domain/entities/user.entity';
import { join } from 'path';
import { Vehicle } from 'src/domain/entities/vehicle.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: join(__dirname, '..', '..', '..', 'db.sqlite'),
      });
      sequelize.addModels([User, Vehicle]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
