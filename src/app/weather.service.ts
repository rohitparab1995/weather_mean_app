import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Wformat } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  bookurl1 = 'http://api.openweathermap.org/data/2.5/weather?q=';
  bookurl2 = '&appid=f4fa27beeb6c2528ad21c0677f77a3ac&units=metric';

  constructor(private http: HttpClient) { }

  getWeatherFromAPI(val): Observable<any> {
   return this.http.get<object>(this.bookurl1 + val + this.bookurl2);
  }

  addWeather(weather: Wformat) {
    this.http
      .post<{ message: string }>('http://localhost:8000/api/storeWeather', weather)
      .subscribe(responseData => {
        alert(responseData.message);
      });
  }

}
