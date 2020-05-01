import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  getWeather() {
    return this.http.get(`http://restapi.demoqa.com/utilities/weather/city/Paris`);
    // return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=60.99&lon=30.9&appid=bb74e988159211bd5e2f6a8b819dbe81&units=imperial`);
    // return this.http.get('http://localhost:3000/PS4');
  }
  constructor(private http: HttpClient) { }
}
