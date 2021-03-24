/* When Angular begins execution, after `main.ts` loads this file, this file then loads all its dependencies,
 * and renders within the `<app-root>` element */
import {AppComponent} from './app.component'
import {BrowserModule} from '@angular/platform-browser'
import {CurrentWeatherComponent} from './current-weather/current-weather.component'
import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
