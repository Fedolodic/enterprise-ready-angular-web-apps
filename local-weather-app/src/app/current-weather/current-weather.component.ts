/* This file contains the `@Component` decorator above the class definition, and is the glue that ties together the CSS, HTML, and JavaScript code. The class itself can be considered the ViewModel, pulling data from services and performing any necessary transformations to expose sensible bindings for the View */
import { Component, OnInit } from '@angular/core'

import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  /* We add the `!` syntax for the common-ish cases where you can't guarantee that the value will be defined immediately
   * It is an escape hatch, adn shouldn't be relied on, as it can make your code less safe
   * A default value is usually preferred
   * It's good to know that it exists though */
  current!: ICurrentWeather

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather('Dallas', 'US')
      .subscribe((data) => (this.current = data))
  }
}
