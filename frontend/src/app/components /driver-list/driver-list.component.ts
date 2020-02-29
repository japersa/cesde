import { Component, OnInit } from "@angular/core";
import { DriverService } from "src/app/shared/driver.service";

@Component({
  selector: "app-driver-list",
  templateUrl: "./driver-list.component.html",
  styleUrls: ["./driver-list.component.css"]
})
export class DriverListComponent {
  driverList: any = [];

  ngOnInit() {
    this.loadDrivers();
  }

  constructor(public driverService: DriverService) {}

  loadDrivers() {
    return this.driverService.getDrivers().subscribe((data: {}) => {
      this.driverList = data;
    });
  }
}
