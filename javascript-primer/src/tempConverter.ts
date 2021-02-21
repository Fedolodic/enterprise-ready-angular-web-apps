export class TempConverter {
  /* An alternative to specifying a union type is to use the `any` keyword, which allows any type to be assigned to a variable, used as an argument, or returned from a method
  * Here we use the `any` keyword on the convertFtoC method
  * Note: The commented code below is equivalent */
  static convertFtoC(temp: any): string {
    let value: number
    if ((temp as number).toPrecision) {
      value = temp
    } else if ((temp as string).indexOf) {
      value = parseFloat(temp as string)
    } else {
      value = 0
    }
    /* Here we use Access Modifiers while returning
    * The commented code below is similar to the `performCalculation()` method in the `TempConverter` class */
    return TempConverter.performCalculation(value).toFixed(1)
    /*return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1)*/
  }

  /* The `performCalculation` method is marked as `private` i.e. the TypeScript compiler will report an error if any other part of the application tries to invoke the method */
  private static performCalculation(value: number): number {
    return (parseFloat(value.toPrecision(2)) - 32 / 1.8)
  }
  /*static convertFtoC(temp: number | string): string {
    /!* Here we are using the `as` keyword to achieve the same result as the angle brackets; which is to declare a type assertion, which will attempt to convert an object to the specified type
    * Note: The commented code below is equivalent *!/
    let value: number = (temp as number).toPrecision ? temp as number: parseFloat(temp as string)
    /!*let value: number = (<number>temp).toPrecision ? <number>temp: parseFloat(<string>temp)*!/
    return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1)
  }*/
}
