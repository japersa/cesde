import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Vehicle } from "./vehicle";

@Injectable({
  providedIn: "root"
})
export class VehicleService {
  private baseurl = environment.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  createVehicle(data): Observable<Vehicle> {
    return this.http
      .post<Vehicle>(
        this.baseurl + "/vehicles/",
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandle));
  }

  getVehicles(): Observable<Vehicle> {
    return this.http
      .get<Vehicle>(this.baseurl + "/vehicles/")
      .pipe(retry(1), catchError(this.errorHandle));
  }

  errorHandle(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
