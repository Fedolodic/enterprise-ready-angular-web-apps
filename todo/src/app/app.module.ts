import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

/* If we wanted to set routing functionality, we could tell Angular which component to load when navigating like so:
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  // Tell to load HomeComponent, when navigating in the browser to domain.com/home
  // We keep adding routes for each components we want to navigate
  path: [
    'home',
    component: HomeComponent,
  ]
}]

@NgModule ({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }
* */

/* @NgModule is Angular. The rest is a standard JS/TS class
* It helps organize an application into cohesive blocks of functionality */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
