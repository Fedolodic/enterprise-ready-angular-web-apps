import {Injectable} from '@angular/core'
import {Product} from "./product.model"
import {StaticDataSource} from "./static.datasource"

/* Access to the data is mediated by this repository, which is responsible for distributing the data to individual application building blocks so that the details of how the data has been obtained are kept hidden */
@Injectable()
export class ProductRepository {
  private products: Product[] = []
  private categories: string[] = []

  constructor(private dataSource: StaticDataSource) {
    /* The repository constructor calls the data source's `getProducts` method and then uses the `subscribe` method on the `Observable` object that is returned to receive the product data */
    dataSource.getProducts().subscribe(data => {
      this.products = data
      this.categories = data
        .map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index).sort()
    })
  }

  getProducts(category: string = null): Product[] {
    return this.products
      .filter(p => category == null || category == p.category)
  }

  getProduct(id: number): Product {
    return this.products
      .find(p => p.id == id)
  }

  getCategories(): string[] {
    return this.categories
  }
}
