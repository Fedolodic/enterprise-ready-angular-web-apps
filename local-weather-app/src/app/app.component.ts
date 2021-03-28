import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div>
      <mat-toolbar color="primary">
        <span>Weather 24/7</span>
      </mat-toolbar>
      <div><b>24-Hour Forecasts</b></div>
      <div fxLayout="row">
        <div fxFlex></div>
        <div fxFlex="300px">
          <mat-card>
            <mat-card-title>
              Current Weather
            </mat-card-title>
            <mat-card-content>
              <app-current-weather></app-current-weather>
            </mat-card-content>
          </mat-card>
        </div>
        <div fxFlex></div>
      </div>
      <div>Weekly Forecast</div>
    </div>`,
})
export class AppComponent {
  title = 'local-weather-app'
}
