import { Component, Input, OnInit } from '@angular/core';
import {WEATHERS} from '../WEATHER-MOCK';
import {WEATHER} from '../WEATHER';

@Component({
  selector: 'app-form-child',
  template: '<h3> Information: {{value}}</h3>' +
    '<div *ngFor="let weather of weathers"><div *ngIf="weather.City == value">Temperature: {{weather.Temperature}}</div></div>' +
    '<div *ngFor="let weather of weathers"><div *ngIf="weather.City == value">Humidity: {{weather.Humidity}}</div></div>' +
    '<div *ngFor="let weather of weathers"><div *ngIf="weather.City == value">Weather Description: {{weather.WeatherDescription}}</div></div>',
  styleUrls: ['./form-child.component.css']
})
export class FormChildComponent implements OnInit {
  weathers = WEATHERS;
  selectedWeather: WEATHER;

  @Input() value: string;


  constructor() { }

  ngOnInit(): void {
  }

}
