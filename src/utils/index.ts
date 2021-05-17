export enum City {
  None = 'Select a city',
  Samara = 'Samara',
  Togliatty = 'Togliatty',
  Saratov = 'Saratov',
  Kazan = 'Kazan',
  Krasnodar = 'Krasnodar'
}

export const Coordinates = {
  [City.None]: { lat: undefined, lon: undefined },
  [City.Samara]: { lat: 53.19, lon: 50.10 },
  [City.Togliatty]: { lat: 53.50, lon: 49.42 },
  [City.Saratov]: { lat: 51.53, lon: 46.03 },
  [City.Kazan]: { lat: 55.79, lon: 49.10 },
  [City.Krasnodar]: { lat: 45.03, lon: 38.97 }
}
