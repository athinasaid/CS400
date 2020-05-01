import { Component, OnInit } from '@angular/core';
import {WeatherService} from './services/weather.service';

@Component({
  selector: 'app-comp1',
  template: '<h1>weather service</h1>\n' +
    'What do you want to know? (Temperature, City, or Humidity)' +
    '<input id="city" class="form-control" required minlength="1" [(ngModel)]="city.name" #city="ngModel">' +
    '<button (click)="getWeather(city.value)">Get weather</button>\n' +
    '\n' +
    '<app-comp2 [weather]="weather"></app-comp2>',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  weather: any;


  constructor(private wx: WeatherService) { }

  getWeather(value: string){
    this.wx.getWeather().subscribe(
      response => {
        this.weather = response[value];
      }
    )
  }

  ngOnInit(): void {

  }

}
