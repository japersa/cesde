import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Vehicle extends Model<Vehicle> {
  @Column number_plate: string;
  @Column brand: string;
  @Column model: string;
}
