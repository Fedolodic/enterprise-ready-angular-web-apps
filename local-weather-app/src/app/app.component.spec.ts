import { AppComponent } from './app.component'
import { TestBed } from '@angular/core/testing'
import { createComponentMock } from 'angular-unit-test-helper'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      /* Declarations allow us to provide all components necessary to render the component under test
       * i.e. they build component classes, along with their template logic, to facilitate testing */
      declarations: [AppComponent, createComponentMock('CurrentWeatherComponent')],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'local-weather-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('local-weather-app')
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('Weather 24/7')
  })
})
