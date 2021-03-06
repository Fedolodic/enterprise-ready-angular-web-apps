import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {ModelModule} from "../model/model.module"
import {StoreComponent} from "./store.component"
import {CounterDirective} from "./counter.directive"

/* `@NgModule` decorator configures the module, using the `imports` property to tell Angular that the store module depends on the model module, as well as `BrowserModule` and `FormsModule`, which contain the standard Angular features for web applications and for working with HTML form elements
* The decorator uses the `declarations` property to tell Angular about the `StoreComponent` class, and the `exports` property tells Angular the class can also be used in other parts of the application, which is important because it will be used by the root module
*
* Note: To use a directive (in this case custom) it must be added to the `declarations` property feature of its module */
@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [StoreComponent, CounterDirective],
  exports: [StoreComponent]
})
export class StoreModule {
}
