/* This file contains the `@Component` decorator above the class definition, and is the glue that ties together the CSS, HTML, and JavaScript code. The class itself can be considered the ViewModel, pulling data from services and performing any necessary transformations to expose sensible bindings for the View */
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
