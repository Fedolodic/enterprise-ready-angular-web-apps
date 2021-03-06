/* This interface, and its eventual concrete representation as a class is the Model in MVVM */
export interface ICurrentWeather {
  city: string
  country: string
  date: number
  image: string
  temperature: number
  description: string
}
