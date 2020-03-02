import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { DriverListComponent } from "./components /driver-list/driver-list.component";
import { AddDriverComponent } from "./components /add-driver/add-driver.component";
import { AddVehicleComponent } from "./components /add-vehicle/add-vehicle.component";
import { VehicleListComponent } from "./components /vehicle-list/vehicle-list.component";

@NgModule({
  declarations: [
    AppComponent,
    DriverListComponent,
    AddDriverComponent,
    AddVehicleComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
