import {NgModule} from '@angular/core'
import {ProductRepository} from "./product.repository"
import {StaticDataSource} from "./static.datasource"

/* `@NgModule` decorator is used to create feature modules, and its properties tell Angular how the module should be used
* There is only one property in the module, `providers`, and it tells Angular which classes should be used as services for the dependency injection feature
* This allows the data model functionality to be easily used elsewhere in the application */
@NgModule({
  providers: [ProductRepository, StaticDataSource]
})

export class ModelModule {
}
