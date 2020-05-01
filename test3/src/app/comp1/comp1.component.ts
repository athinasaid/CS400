import { Component, OnInit } from '@angular/core';
import {WeatherService} from './services/weather.service';

@Component({
  selector: 'app-comp1',
  template: '<h1>weather service</h1>\n' +
    'Which city do you want to know more of? (Paris or London)' +
    '<input id="city" class="form-control" required minlength="1" [(ngModel)]="city.name" #city="ngModel">' +
    '<button (click)="getWeather(city.value)">Get weather</button>\n' +
    '\n' +
    '<app-comp2 [weather]="weather" [value]="value"></app-comp2>',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  weather: any;
  value: any;

  constructor(private wx: WeatherService) { }

  getWeather(value: string){
    this.wx.getWeather().subscribe(
      response => {
        const x = response;
        console.log(x[0][value]);
        this.weather = x;
        this.value = value;
      }
    )
  }
  ngOnInit(): void {
  }

}
