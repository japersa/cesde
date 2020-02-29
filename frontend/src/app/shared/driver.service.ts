import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Driver } from "./driver";

@Injectable({
  providedIn: "root"
})
export class DriverService {
  private baseurl = environment.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  createDriver(data): Observable<Driver> {
    return this.http
      .post<Driver>(
        this.baseurl + "/drivers/",
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandle));
  }

  getDrivers(): Observable<Driver> {
    return this.http
      .get<Driver>(this.baseurl + "/drivers/")
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
