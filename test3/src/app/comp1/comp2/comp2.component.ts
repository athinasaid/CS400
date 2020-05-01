import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  template: '<h2>Information:</h2>' +
    // '<p>{{weather.value}}</p>',
    '<div *ngFor="let weather of weather"><div *ngIf="weather.City == value">Temperature: {{weather.Temperature}}</div></div>',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  @Input() weather: any;
  @Input() value: any;

  constructor() { }

  ngOnInit(): void {
  }

}
