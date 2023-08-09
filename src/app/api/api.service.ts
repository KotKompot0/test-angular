import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ICurrentTimeRequest } from "./interfaces/current-time/current-time-request";
import { ICurrentTimeResponse } from "./interfaces/current-time/current-time-response";
import { ApiEnumUrls } from "./api.enum.urls";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urls = ApiEnumUrls;
  currentTime(request: ICurrentTimeRequest): Observable<ICurrentTimeResponse>{
    return this.http.get<ICurrentTimeResponse>(this.urls.currentTimeUrl + "timeZone=" + request.timeZone)
  }

  constructor(private http: HttpClient) { }
}
