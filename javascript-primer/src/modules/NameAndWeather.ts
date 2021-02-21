export class Name {

  /* The pattern of receiving constructor parameters and assigning their values to variables is so common that TypeScript includes an optimization as shown below:
  * This stops us from having to write the equivalent commented code underneath
  *
  * Note: the keyword `private` is an example of an access control modifier
  * Applying the keyword to the constructor has the effect of automatically defining the class property and assigning it the parameter value */
  constructor(private first: string, private second: string) {}
  /*first: string
  second: string*/

  /*constructor(first: string, second: string) {
    this.first = first
    this.second = second
  }*/

  get nameMessage(): string {
    return `Hello ${this.first} ${this.second}`
  }
}

export class WeatherLocation {
  constructor(private weather: string, private city: string) {}

  get weatherMessage(): string {
    return `It is ${this.weather} in ${this.city}`
  }
}
