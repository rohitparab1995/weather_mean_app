import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Wformat } from '../weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  val = '';
  updatedDate: Date;
  weatherFetch: any;
  error: any;

  ngOnInit() {
  }

  constructor(private weatherservice: WeatherService) {}

  func(val) {
    this.updatedDate = new Date();
    this.weatherservice.getWeatherFromAPI(val).subscribe(
      climate => {
      this.weatherFetch = climate;
      this.error = '';
      console.log (this.weatherFetch);
    },
    err => {
      this.error = 'Please enter a valid city.';
      console.log ('Error:' + this.error);
    });

  }
  onSave() {
    const weatherData: Wformat = { city: this.val,
    temp : this.weatherFetch.main.temp,
    lat : this.weatherFetch.coord.lat,
    lon : this.weatherFetch.coord.lon,
    curdate : new Date(),
    };
    console.log (weatherData);
    this.weatherservice.addWeather(weatherData);
  }

}
