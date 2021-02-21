/* Interesting example of chaining function calls */
/*let myFunc = nameFunction => `Hello ${nameFunction()}.`

let printName = (nameFunction, printFunction) => printFunction(myFunc(nameFunction))

printName(() => "Albert Einstein", console.log)*/

/* We can use chaining to process a filtered data array */
/*let products = [
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

/!* We use the `filter` method to select the items in the array whose `stock` value is greater than zero, and use the `reduce` method to determine the total value of those items; producing the the following input
*
* Total value: $2864.99 *!/
let totalValue = products
  .filter(item => item.stock > 0)
  .reduce((prev, item) => prev + (item.price * item.stock), 0)

console.log(`Total value: $${totalValue.toFixed(2)}`)*/

/* An object literal. Notice that format "property: value,"
* A function defined on an object is called a *method*
* When a function is used as a method, the function is implicitly passed the object on which the method has been called as an argument through the special variable, `this`
* Notice that I used a function expression, not an arrow function expression, when defining the `printMessages` method
* Rationale: From MDN documentation: An arrow function expression does not have its own bindings to `this`, and should not be used as `methods` */
/*let myData = {
  name: "David",
  weather: "sunny",
  printMessages: function () {
    console.log(`Hello ${this.name}!`)
    console.log(`Today is ${this.weather}.`)
  }
}

myData.printMessages()*/

/* The functionality showed in the code above can be expressed using a class like this: */
/*class MyClass {
  constructor(name, weather) {
    this.name = name
    this.weather = weather
  }

  printMessages() {
    console.log(`Hello ${this.name}!`)
    console.log(`Today is ${this.weather}.`)
  }
}

let myData = new MyClass("David", "sunny")
myData.printMessages()*/

/* Example using getters, and setters with the code above: */
/*class MyClass {
  constructor(name, weather) {
    this.name = name
    this._weather = weather
  }

  set weather(value) {
    this._weather = value
  }

  get weather() {
    return `Today is ${this._weather}.`
  }

  printMessages() {
    console.log(`Hello ${this.name}!`)
    console.log(this.weather)
  }
}

let myData = new MyClass("David", "sunny")
myData.printMessages()*/

/* Here we show an example of class inheritance using the `extends` keyword
* Note: The `super` keyword is used to invoke the superclass' constructor and methods */
/*class MyClass {
  constructor(name, weather) {
    this.name = name
    this._weather = weather
  }

  set weather(value) {
    this._weather = value
  }

  get weather() {
    return `Today is ${this._weather}.`
  }

  printMessages() {
    console.log(`Hello ${this.name}!`)
    console.log(this.weather)
  }
}

class MySubClass extends MyClass {
  constructor(name, weather, city) {
    super(name, weather)
    this.city = city
  }

  printMessages() {
    super.printMessages()
    console.log(`You are in ${this.city}`)
  }
}

let myData = new MyClass("David", "sunny")
myData.printMessages()
let otherData = new MySubClass("Kanye", "overcast", "Beverly Hills")
otherData.printMessages()*/

/* Example of using modules via the `import` keyword */
/*import { Name, WeatherLocation } from './modules/NameAndWeather'

let name = new Name("Lex", "Fridman")
let loc = new WeatherLocation("snowing", "Cambridge")

console.log(name.nameMessage)
console.log(loc.weatherMessage)*/

/* Example of renaming imports, since importing `Name` from two different files will cause a conflict because the compiler won't be able to differentiate between the two classes with the same name
* The solution is to use the `as` keyword, allowing an alias to be created for a class when imported from a module */
/*
import { Name, WeatherLocation } from './modules/NameAndWeather'
import { Name as OtherName } from './modules/DuplicateName'

let name = new Name("Lex", "Fridman")
let loc = new WeatherLocation("snowing", "Cambridge")
let other = new OtherName()

console.log(name.nameMessage)
console.log(loc.weatherMessage)
console.log(other.message)*/

/* Alternative approach is to import the module as an object that has properties for each of the types it contains
* Here the `import` statement imports the contents of `NameAndWeather` module and creates an object called `NameAndWeatherLocation`
* This object has `Name` and `Weather` properties that correspond to the classes defined in the module */
/*import * as NameAndWeatherLocation from './modules/NameAndWeather'
import { Name as OtherName } from './modules/DuplicateName'

let name = new NameAndWeatherLocation.Name("Lex", "Fridman")
let loc = new NameAndWeatherLocation.WeatherLocation("snowing", "Cambridge")
let other = new OtherName()

console.log(name.nameMessage)
console.log(loc.weatherMessage)
console.log(other.message)*/

import { Name, WeatherLocation } from './modules/NameAndWeather'
import { Name as OtherName } from './modules/DuplicateName'
import { TempConverter } from "./tempConverter";

let name = new Name("Lex", "Fridman")
let loc = new WeatherLocation("snowing", "Cambridge")
let other = new OtherName()

let cTemp = TempConverter.convertFtoC(54)
let otherCTemp = TempConverter.convertFtoC("0")

let tuple: [string, string, string]
tuple = ["London", "raining", TempConverter.convertFtoC("38")]

/* Indexable types associate a key with a value, creating a map-like collection that can be used to gather related data items together
* Here the `cities` variable is defined as an indexable type, with the key as a string and the data value as a `[string, string]` tuple
* Values are assigned and read using array-like indexers, such as `cities["London"]`
* The collection of keys in an indexable type can be accessed using a `for..in` loop
* Note: Only `number` and `string` values can be used as the keys for indexable types, but this is a helpful feature */
let cities: { [index: string]: [string, string] } = {}
cities["London"] = ["raining", TempConverter.convertFtoC("48")]
cities["Paris"] = ["sunny", TempConverter.convertFtoC("52")]
cities["Berlin"] = ["snowing", TempConverter.convertFtoC("23")]

for (let key in cities) {
  console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`)
}

console.log(name.nameMessage)
console.log(loc.weatherMessage)
console.log(other.message)
console.log(`The temp is ${cTemp}C`)
console.log(`The temp is ${otherCTemp}C`)
console.log(`It is ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}!`)
