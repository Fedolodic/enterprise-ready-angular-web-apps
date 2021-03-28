/* When Angular begins execution, after `main.ts` loads this file, this file then loads all its dependencies,
 * and renders within the `<app-root>` element */
import {AppComponent} from './app.component'
import {BrowserModule} from '@angular/platform-browser'
import {CurrentWeatherComponent} from './current-weather/current-weather.component'
import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module'
import {FlexLayoutModule} from '@angular/flex-layout';
import {SideNavComponent} from './side-nav/side-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent, SideNavComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
