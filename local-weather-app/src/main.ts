/* When Angular begins execution, it first loads this file
* It configures the framework for browser use and loads the app module */
import { AppModule } from './app/app.module'
import { enableProdMode } from '@angular/core'
import { environment } from './environments/environment'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err))
