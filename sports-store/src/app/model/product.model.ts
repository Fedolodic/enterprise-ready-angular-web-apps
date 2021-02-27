/* Class that describes the products sold in the store
* These properties correspond to the structure of the data used to pupulate the RESTful web service */
export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number
  ) {
  }
}
