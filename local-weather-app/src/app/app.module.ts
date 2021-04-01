/* When Angular begins execution, after `main.ts` loads this file, this file then loads all its dependencies,
 * and renders within the `<app-root>` element */
import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {BrowserModule} from '@angular/platform-browser'
import {CurrentWeatherComponent} from './current-weather/current-weather.component'
import {FlexLayoutModule} from '@angular/flex-layout'
import {HttpClientModule} from '@angular/common/http'
import {LayoutModule} from '@angular/cdk/layout'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MaterialModule} from './material.module'
import {NgModule} from '@angular/core'
import {SideNavComponent} from './side-nav/side-nav.component'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent, SideNavComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
