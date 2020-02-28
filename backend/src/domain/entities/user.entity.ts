import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column firstName: string;
  @Column lastName: string;
  @Column identification: string;
  @Column birthday: string;
  @Column phone: string;
  @Column mobile: string;
  @Column address: string;
}
