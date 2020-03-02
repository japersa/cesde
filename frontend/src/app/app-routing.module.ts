import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoPageFoundComponent } from "./components /no-page-found/no-page-found.component";
import { DriverListComponent } from "./components /driver-list/driver-list.component";
import { AddDriverComponent } from "./components /add-driver/add-driver.component";
import { VehicleListComponent } from "./components /vehicle-list/vehicle-list.component";
import { AddVehicleComponent } from "./components /add-vehicle/add-vehicle.component";
import { AddTravelComponent } from "./components /add-travel/add-travel.component";
import { TravelListComponent } from "./components /travel-list/travel-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/driver-list", pathMatch: "full" },
  { path: "driver-list", component: DriverListComponent },
  { path: "add-driver", component: AddDriverComponent },
  { path: "vehicle-list", component: VehicleListComponent },
  { path: "add-vehicle", component: AddVehicleComponent },
  { path: "add-travel", component: AddTravelComponent },
  { path: "travel-list", component: TravelListComponent },
  { path: "**", component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
