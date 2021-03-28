import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align: center">
      <mat-toolbar>
        <span>Weather 24/7</span>
      </mat-toolbar>
      <div><b>Some type of slogan, or tagline! I'm going to be changing this tho 🥳</b></div>
      <app-current-weather></app-current-weather>
      <div>Weekly Forecast</div>
    </div>`,
})
export class AppComponent {
  title = 'local-weather-app'
}
