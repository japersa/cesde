import { Component, OnInit, NgZone } from "@angular/core";
import { DriverService } from "../../shared/driver.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { VehicleService } from "src/app/shared/vehicle.service";
import { TravelService } from "src/app/shared/travel.service";

@Component({
  selector: "app-add-travel",
  templateUrl: "./add-travel.component.html",
  styleUrls: ["./add-travel.component.css"]
})
export class AddTravelComponent implements OnInit {
  travelForm: FormGroup;
  driverList: any = [];
  vehicleList: any = [];

  ngOnInit() {
    this.addTravel();
    this.loadVehicles();
    this.loadDrivers();
  }

  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public travelService: TravelService,
    public vehicleService: VehicleService,
    public driverService: DriverService
  ) {}

  loadVehicles() {
    return this.vehicleService.getVehicles().subscribe((data: {}) => {
      this.vehicleList = data;
    });
  }

  loadDrivers() {
    return this.driverService.getDrivers().subscribe((data: {}) => {
      this.driverList = data;
    });
  }

  addTravel() {
    this.travelForm = this.formBuilder.group({
      driverId: [""],
      vehicleId: [""],
      number_services: [""],
      money_raised: [""],
      travel_date: [""]
    });
  }

  submitForm() {
    this.travelService
      .createTravel({
        driverId: parseInt(this.travelForm.value.driverId),
        vehicleId: parseInt(this.travelForm.value.vehicleId),
        number_services: parseInt(this.travelForm.value.number_services),
        money_raised: parseInt(this.travelForm.value.money_raised),
        travel_date: this.travelForm.value.travel_date
      })
      .subscribe(res => {
        console.log("Driver added!");
        this.ngZone.run(() => this.router.navigateByUrl("/travel-list"));
      });
  }
}
