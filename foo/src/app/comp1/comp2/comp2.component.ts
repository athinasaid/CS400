import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  template: '<h3>Information</h3>' +
            '<p>{{weather}} </p>' +
            '<div *ngFor="let weather of weather"><div *ngIf="weather.City == value">Temperature: {{weather.Temperature}}</div></div>',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @Input() weather: any;

  constructor() { }

  ngOnInit(): void {
  }

}
