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
  public selectedCategory = null
  public productsPerPage = 4
  public selectedPage = 1

  constructor(private repository: ProductRepository) {
  }

  /* The `products` and `categories` properties will be used to generate HTML content in the template, using data obtained from the repository */
  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage)
  }

  get categories(): string[] {
    return this.repository.getCategories()
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory
  }

  /* We replaced the following commented code with `pageCount()` to demonstrate that it is possible to supplement the built-in Angular functionality with custom code that is tailored to the needs of a specific project
  * i.e. There is no visual change to the SportsStore application*/
  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage)
  }

  /*get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x, i) => i + 1)
  }*/

  changePage(newPage: number) {
    this.selectedPage = newPage
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize)
    this.changePage(1)
  }
}
