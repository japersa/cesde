import { Component, OnInit, NgZone } from "@angular/core";
import { VehicleService } from "../../shared/vehicle.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-vehicle",
  templateUrl: "./add-vehicle.component.html",
  styleUrls: ["./add-vehicle.component.css"]
})
export class AddVehicleComponent implements OnInit {
  vehicleForm: FormGroup;

  ngOnInit() {
    this.addVehicle();
  }

  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public vehicleService: VehicleService
  ) {}

  addVehicle() {
    this.vehicleForm = this.formBuilder.group({
      number_plate: [""],
      brand: [""],
      model: [""]
    });
  }

  submitForm() {
    this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(res => {
      console.log("Driver added!");
      this.ngZone.run(() => this.router.navigateByUrl("/vehicle-list"));
    });
  }
}
