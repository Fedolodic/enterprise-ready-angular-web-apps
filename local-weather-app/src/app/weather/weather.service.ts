import { HttpClient, HttpParams } from '@angular/common/http'

import { ICurrentWeather } from '../interfaces'
/* This file contains the `@Injectable` decorator above the class definition, which makes it possible to inject this service into other components, leveraging Angular's provider system. This ensures that our service is a singleton, meaning it is instantiated once, no matter how many times it is injected elsewhere */
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators'

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
export class WeatherService implements IWeatherService {
  constructor(private httpClient: HttpClient) {}

  private static transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      /* JavaScript's timestamp is in milliseconds, but the server value is in seconds, so a simple multiplication during the transformation is required (the *1000 part)*/
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: WeatherService.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    }
  }

  /* Arguments could be made that this conversion is a View concern, or that at this time we only need to display Fahrenheit and it's part of the job of the weather service to convert the units
   * The ultimate implementation is to write a custom Angular pipe and apply it in the template
   * A pipe can easily bind with the planned toggle button as well
   *
   * However, at this time, we only need to display Fahrenheit, and it's best not to over-engineer a solution */
  private static convertKelvinToFahrenheit(kelvin: number): number {
    return (kelvin * 9) / 5 - 459.67
  }

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
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

    return this.httpClient
      .get<ICurrentWeatherData>(
        `${environment.baseUrl}api.openweathermap.org/data/2.5/weather`,
        { params: uriParams }
      )
      .pipe(map((data) => WeatherService.transformToICurrentWeather(data)))
  }
}

export interface IWeatherService {
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>
}
