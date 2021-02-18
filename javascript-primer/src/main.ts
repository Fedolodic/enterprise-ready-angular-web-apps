/* Interesting example of chaining function calls */
let myFunc = nameFunction => `Hello ${nameFunction()}.`

let printName = (nameFunction, printFunction) => printFunction(myFunc(nameFunction))

printName(() => "Albert Einstein", console.log)

/* We can use chaining to process a filtered data array */
let products = [
  {
    name: "Hat",
    price: 24.5,
    stock: 10
  },
  {
    name: "Kayak",
    price: 289.99,
    stock: 1
  },
  {
    name: "Soccer Ball",
    price: 10,
    stock: 0
  },
  {
    name: "Running Shoes",
    price: 116.50,
    stock: 20
  }
]

/* We use the `filter` method to select the items in the array whose `stock` value is greater than zero, and use the `reduce` method to determine the total value of those items; producing the the following input
*
* Total value: $2864.99 */
let totalValue = products
  .filter(item => item.stock > 0)
  .reduce((prev, item) => prev + (item.price * item.stock), 0)

console.log(`Total value: $${totalValue.toFixed(2)}`)
