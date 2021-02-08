import { HttpClient, HttpParams } from '@angular/common/http'

/* This file contains the `@Injectable` decorator above the class definition, which makes it possible to inject this service into other components, leveraging Angular's provider system. This ensures that our service is a singleton, meaning it is instantiated once, no matter how many times it is injected elsewhere */
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'

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

  getCurrentWeather(city: string, country: string) {
    /* We could of written our GET request like this:

      return this.httpClient
       .get<ICurrentWeatherData>(
          `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
          `q=${city},${country}&appid=${environment.appId}`
       )

       However, using a long and complicated string is an error-prone process. Instead, we can use the `HttpParams` object to build the URL programmatically like this:
    */
    const uriParams = new HttpParams()
      .set('q', `${city},${country}`)
      .set('appid', environment.appId)

    return this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather`,
      { params: uriParams }
    )
  }
}
