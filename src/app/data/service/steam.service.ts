
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable()
export class SteamService {

  baseURL: string = environment.steamApiUrl;

  constructor(private http: HttpClient) {
  }

  getAppDetails(appid: number): Observable<any> {


    return this.http.get(this.baseURL + 'appdetails?app_id=' + appid)
  }
  getAppList(): Observable<any> {

    return this.http.get(this.baseURL + 'applist')
  }


}