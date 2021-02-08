/* This file contains Jasmine-based unit tests that you can extend to test your service's functionality */
import { TestBed } from '@angular/core/testing'
import { WeatherService } from './weather.service'

describe('WeatherService', () => {
  let service: WeatherService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(WeatherService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
