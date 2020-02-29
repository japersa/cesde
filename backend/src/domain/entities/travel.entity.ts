import {
  Table,
  Column,
  Model,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Driver } from './driver.entity';
import { Vehicle } from './vehicle.entity';

@Table
export class Travel extends Model<Travel> {
  @AllowNull(false)
  @ForeignKey(() => Driver)
  @Column({
    unique: true,
  })
  driverId: number;

  @BelongsTo(() => Driver)
  driver: Driver;

  @AllowNull(false)
  @ForeignKey(() => Vehicle)
  @Column({
    unique: true,
  })
  vehicleId: number;

  @BelongsTo(() => Vehicle)
  vehicle: Vehicle;

  @Column
  number_services: number;

  @Column
  money_raised: number;

  @Column travel_date: string;
}
