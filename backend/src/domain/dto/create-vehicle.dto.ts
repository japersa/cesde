import { IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  readonly number_plate: string;
  @IsNotEmpty()
  readonly brand: string;
  @IsNotEmpty()
  readonly model: string;
}
