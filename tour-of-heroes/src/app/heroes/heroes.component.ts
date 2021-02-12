import { Component, OnInit } from '@angular/core';

/* The CLI generated these 3 metadata properties:
*   1. `selector` - the component's CSS element selector
*   2. `templateUrl` - the location of the component's template file
*   3. `styleUrls` - the location of the component's private CSS styles */
@Component({
  /* The CSS element selector, `app-heroes`, matches the name of the HTML element that identifies this component within a parent component's template */
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/* Always `export` the component class so you can `import` it elsewhere ... like in the `AppModule` */
export class HeroesComponent implements OnInit {
  /* Add property to the `HeroesComponent` for a hero named "Windstorm" */
  hero = 'Windstorm';

  constructor() { }

  /* The `ngOnInit()` is a lifecycle hook
  * Angular calls `ngOnInit()` shortly after creating a component
  * It's a good place to put initialization logic */
  ngOnInit(): void {
  }

}
