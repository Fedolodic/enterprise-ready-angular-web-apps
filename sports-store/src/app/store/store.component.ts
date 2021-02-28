import {Component} from '@angular/core'
import {Product} from '../model/product.model'
import {ProductRepository} from "../model/product.repository"

/* `@Component` decorator has been applied to the `StoreComponent` class, which tells Angular that this is a Component
* The decorator's properties tell Angular how to apply the component to the HTML content (using an element called `store`), and how to find the component's template (in a file called `store.component.html`)*/
@Component({
  selector: "store",
  templateUrl: "store.component.html"
})
export class StoreComponent {
  constructor(private repository: ProductRepository) {
  }

  /* The `products` and `categories` properties will be used to generate HTML content in the template, using data obtained from the repository */
  get products(): Product[] {
    return this.repository.getProducts()
  }

  get categories(): string[] {
    return this.repository.getCategories()
  }
}
