import { Driver } from "./driver";
import { Vehicle } from "./vehicle";

export class Travel {
  constructor(
    public driver: Driver,
    public vehicle: Vehicle,
    public driverId: number,
    public vehicleId: number,
    public number_services: number,
    public money_raised: number,
    public travel_date: string
  ) {}
}
