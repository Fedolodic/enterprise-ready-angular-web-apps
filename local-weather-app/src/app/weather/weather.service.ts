import { HttpClient } from '@angular/common/http'
/* This file contains the `@Injectable` decorator above the class definition, which makes it possible to inject this service into other components, leveraging Angular's provider system. This ensures that our service is a singleton, meaning it is instantiated once, no matter how many times it is injected elsewhere */
import { Injectable } from '@angular/core'

interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
  }
  sys: {
    country: string
  }
  dt: number
  name: string
}

/* The `providedIn` property ensures that the root module provides the weather service in `app.module.ts` */
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}
}
