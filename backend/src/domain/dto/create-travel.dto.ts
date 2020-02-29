import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTravelDto {
  @IsNumber()
  readonly driverId: number;
  @IsNumber()
  readonly vehicleId: number;
  @IsNumber()
  readonly number_services: number;
  @IsNumber()
  readonly money_raised: number;
  @IsNotEmpty()
  readonly travel_date: string;
}
