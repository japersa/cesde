import { Component, OnInit } from "@angular/core";
import { TravelService } from "src/app/shared/travel.service";

@Component({
  selector: "app-travel-list",
  templateUrl: "./travel-list.component.html",
  styleUrls: ["./travel-list.component.css"]
})
export class TravelListComponent {
  travelList: any = [];

  ngOnInit() {
    this.loadTravels();
  }

  constructor(public travelService: TravelService) {}

  loadTravels() {
    return this.travelService.getTravels().subscribe((data: {}) => {
      this.travelList = data;
    });
  }
}
