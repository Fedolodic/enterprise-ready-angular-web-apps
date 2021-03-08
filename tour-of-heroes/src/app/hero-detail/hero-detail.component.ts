import {Component, Input, OnInit} from '@angular/core'
import {Hero} from '../hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  /* `hero` property must be an *Input* property, annotated with the `@Input()` decorator, because the *external* `HeroesComponent` will use property binding to bind the `hero` property in this component to `selectedHero` in `HeroesComponent` like this:
  * `<app-hero-detail [hero]="selectedHero"></app-hero-detail>`
  *
  * This is a common pattern when sharing data between one or more child components */
  @Input() hero?: Hero

  constructor() {
  }

  ngOnInit(): void {
  }

}
