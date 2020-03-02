import { Component, OnInit } from "@angular/core";
import { VehicleService } from "src/app/shared/vehicle.service";

@Component({
  selector: "app-vehicle-list",
  templateUrl: "./vehicle-list.component.html",
  styleUrls: ["./vehicle-list.component.css"]
})
export class VehicleListComponent {
  vehicleList: any = [];

  ngOnInit() {
    this.loadVehicles();
  }

  constructor(public vehicleService: VehicleService) {}

  loadVehicles() {
    return this.vehicleService.getVehicles().subscribe((data: {}) => {
      this.vehicleList = data;
    });
  }
}
