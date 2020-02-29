import { Component, OnInit, NgZone } from "@angular/core";
import { DriverService } from "../../shared/driver.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-driver",
  templateUrl: "./add-driver.component.html",
  styleUrls: ["./add-driver.component.css"]
})
export class AddDriverComponent implements OnInit {
  driverForm: FormGroup;

  ngOnInit() {
    this.addDriver();
  }

  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public driverService: DriverService
  ) {}

  addDriver() {
    this.driverForm = this.formBuilder.group({
      firstName: [""],
      lastName: [""],
      identification: [""],
      birthday: [""],
      phone: [""],
      mobile: [""],
      address: [""]
    });
  }

  submitForm() {
    this.driverService.createDriver(this.driverForm.value).subscribe(res => {
      console.log("Driver added!");
      this.ngZone.run(() => this.router.navigateByUrl("/driver-list"));
    });
  }
}
