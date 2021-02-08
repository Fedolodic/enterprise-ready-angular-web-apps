/* This file contains the `@Component` decorator above the class definition, and is the glue that ties together the CSS, HTML, and JavaScript code. The class itself can be considered the ViewModel, pulling data from services and performing any necessary transformations to expose sensible bindings for the View */
import { Component, OnInit } from '@angular/core'

import { ICurrentWeather } from '../interfaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor() {
    this.current = {
      city: 'Dallas',
      country: 'US',
      date: new Date(),
      image: 'assets/img/sunny.jpg',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather
  }

  ngOnInit(): void {}
}
