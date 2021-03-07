import {Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core'

/* This is an example of a structural directive (SD)
* SDs change the the layout of the HTML document by adding and removing elements
* They build on the core features available for attribute directives, which are small fragments of contents defined within the templates used by components
* You recognize when a structural directive is being used because its name will be prefixed with an asterisk, such as `*ngIf` or `*ngFor`
*
* What are they?
* SDs use micro-templates to add content to the HTML document
*
* How are they useful?
* SDs allow content to be added conditionally based on the result of an expression, or for the same content to be repeated for each object in a data source, such as an array
*
* How are they used?
* SDs are applied to an `ng-template` element, which contains the content and bindings that comprimise its micro-template
*
* Problem: Solution
* Creating a SD: Apply the `@Directive` decorator to a class that receives view container and template constructor parameters */
@Directive({
  selector: "[counterOf]"
})
export class CounterDirective {
  @Input("counterOf")
  counter: number

  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {
  }

  /* This directive deletes all the content it has created and starts again when the number of pages changes. This can be an expensive process in more complex directives i.e. Know that performance can be improved */
  ngOnChanges(changes: SimpleChanges) {
    this.container.clear()
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1))
    }
  }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) {
  }
}
