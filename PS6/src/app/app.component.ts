import { Component } from '@angular/core';
import { WEATHER} from './WEATHER';
import { WEATHERS} from './WEATHER-MOCK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  weathers = WEATHERS;
  selectedWeather: WEATHER;

  selectWeather(weather: WEATHER) {
    this.selectedWeather = weather;
  }


}


