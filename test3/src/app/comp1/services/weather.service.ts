import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather() {
    // return this.http.get(`http://restapi.demoqa.com/utilities/weather/city/Paris`);
    return this.http.get('http://localhost:3000/foo');
  }
}
