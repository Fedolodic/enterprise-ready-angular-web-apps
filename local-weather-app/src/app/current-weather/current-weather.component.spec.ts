/* This file contains Jasmine-based unit tests that you can extend to test your component functionality */
import {ComponentFixture, TestBed} from '@angular/core/testing'

import {By} from '@angular/platform-browser'
import {CurrentWeatherComponent} from './current-weather.component'
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {WeatherService} from '../weather/weather.service'
import {fakeWeather} from '../weather/weather.service.fake'
import {injectSpy} from 'angular-unit-test-helper'
import {of} from 'rxjs'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>
  /* Mock a version of `WeatherService` */
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  /* Before each function, declare and compile the component's dependent modules asynchronously */
  beforeEach(async () => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'getCurrentWeather',
    ])

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CurrentWeatherComponent],
      /* Providers allow us to provide components without template logic, or services that are injected to out component under test by injecting real and fake implementations of dependencies
       * i.e. they provide component classes without template logic and dependencies that need to be injected
       * e.g. providers: [{ provide: WeatherService, useClass: FakeWeatherService }] */
      providers: [{ provide: WeatherService, useValue: weatherServiceSpy }],
    }).compileComponents()
    /* Using `weatherServiceMock`, we can spy on whether `getCurrentWeather` is being called or not, but also stub out its return value depending on the test
     * In order to manipulate the return value of `getCurrentWeather`, we need to update the **should create** test to reflect the arrange, act, and assert structure */
    weatherServiceMock = injectSpy(WeatherService)
  })

  /* Before each function, create a test fixture, and start listening to changes in the component */
  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    // Arrange
    /* Using `weatherServiceMock`, we can spy on whether `getCurrentWeather` is being called or not, and also stub out its return value depending on the test using `returnValue(of())` to return an empty observable */
    weatherServiceMock.getCurrentWeather.and.returnValue(of())

    // Act
    /* `detectChanges()` triggers lifecycle events like `ngOnInit`
     * Since the code we're testing is in `ngOnInit` this is the right thing to execute here */
    fixture.detectChanges()

    // Assert
    expect(component).toBeTruthy()
  }, 5000)

  it('should get currentWeather from weatherService', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of())

    // Act
    fixture.detectChanges()

    // Assert
    expect(weatherServiceMock.getCurrentWeather).toHaveBeenCalledTimes(1)
  })

  /* Testing the fact that the values are being returned correctly assigned in the component class, and also that they are correctly rendered on the template */
  it('should eagerly load currentWeather in Dallas from weatherService', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of(fakeWeather))

    // Act
    fixture.detectChanges()

    // Assert
    expect(component.current).toBeDefined()
    expect(component.current.city).toEqual('Dallas')
    expect(component.current.temperature).toEqual(280.32)

    // Assert on DOM
    const debugEl = fixture.debugElement
    const titleEl: HTMLElement = debugEl.query(By.css('.mat-title')).nativeElement
    expect(titleEl.textContent).toContain('Dallas')
  })
})
