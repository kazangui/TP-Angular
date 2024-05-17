import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private clientHttp:HttpClient) { }


  getWeatherService(ville: string):Observable<any>{
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid=cf532cd2aced266e16de172022b99f79&units=metric"
    return this.clientHttp.get<any>(url);

  }
}
