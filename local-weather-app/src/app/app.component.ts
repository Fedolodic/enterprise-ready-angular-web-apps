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
        <mat-card fxFlex="300px">
          <mat-card-header>
            <mat-card-title>Current Weather</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <app-current-weather></app-current-weather>
          </mat-card-content>
        </mat-card>
        <div fxFlex></div>
      </div>
      <div>Weekly Forecast</div>
    </div>`,
})
export class AppComponent {
  title = 'local-weather-app'
}
