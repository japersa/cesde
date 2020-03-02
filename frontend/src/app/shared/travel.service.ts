import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Travel } from "./travel";

@Injectable({
  providedIn: "root"
})
export class TravelService {
  private baseurl = environment.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  createTravel(data): Observable<Travel> {
    return this.http
      .post<Travel>(
        this.baseurl + "/travels/",
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandle));
  }

  getTravels(): Observable<Travel> {
    return this.http
      .get<Travel>(this.baseurl + "/travels/")
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
