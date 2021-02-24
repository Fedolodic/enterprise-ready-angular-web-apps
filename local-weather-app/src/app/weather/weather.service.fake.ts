import { ICurrentWeather } from '../interfaces'
/*import { Observable, of } from 'rxjs'
import { IWeatherService } from './weather.service'*/

/* A fake is an alternative, simplified implementation of an existing class
 * Here we're creating a fake weather service, where there is no actual HTTP call made, but our service returns pre-baked responses
 * During unit testing, a fake is instantiated, and is used like the real class */
export const fakeWeather: ICurrentWeather = {
  city: 'Dallas',
  country: 'US',
  date: 1485789600,
  image: '',
  temperature: 280.32,
  description: 'light intensity drizzle',
}

/*export class WeatherServiceFake implements IWeatherService {
  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    /!* By leveraging the existing `ICurrentWeather` interface, we ensure that our fake data is correctly shaped, but we must also turn it into an `Observable`
     * This is easily achieved using `of`, which creates an observable sequence, given the provided parameters *!/
    return of(fakeWeather)
  }
}*/
