import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'
import {map, shareReplay} from 'rxjs/operators'

import {Component} from '@angular/core'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    )

  constructor(private breakpointObserver: BreakpointObserver) {}
}
