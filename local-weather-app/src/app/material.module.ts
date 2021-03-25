import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar'

/* `imports` and `exports` arrays can become redundant
* Better to store properties to a `const` for a more reliable configuration */
const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule {
}
