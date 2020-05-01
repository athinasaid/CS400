import { Component, OnInit } from '@angular/core';
import {WEATHERS} from './WEATHER-MOCK';
import {WEATHER} from './WEATHER';


@Component({
  selector: 'app-form-parent',
  template: '<h3>List of Cities:</h3>' +

    '<ul>' +
      '<li *ngFor="let weather of weathers">' +
        '<label (click)="selectWeather(weather)">{{weather.City}}</label>' +
    '</li> ' +
    '</ul>'+
    'Which city would you like to get more information of? (i.e. Paris)' +
    '<input id="city" class="form-control" required minlength="1" ' +
    '[(ngModel)]="city.name" #city="ngModel">' +
    '<button (click)="getInfo(city.value)">get info</button>' +
    '<app-form-child [value]="value"></app-form-child>',
  styleUrls: ['./form-parent.component.css']
})
export class FormParentComponent implements OnInit {

  weathers = WEATHERS;
  selectedWeather: WEATHER;

  selectWeather(weather: WEATHER) {
    this.selectedWeather = weather;
  }

  value:string;

  getInfo(value: string){
    this.value = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
