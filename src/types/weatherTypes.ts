// Definir tipos detallados para el clima
interface Weather {
  main: string;
  description: string;
  icon: string;
}

export type Coordinates = {
  lat: number;
  lon: number;
};

export type Sys = {
  country: string;
  sunrise: number;
  sunset: number;
};

export type WeatherData = {
  name: string;
  temperature: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  visibility: number;
  wind: number;
  weather: Weather;
  windSpeed: number;
  humidity: number;
  coordinates: Coordinates;
  sys: Sys;
  cod: number;
};

// Redefinir el tipo Config con todos los posibles valores
export type Config = {
  location: string;
  tempUnit: "celsius" | "fahrenheit";
  updateFrequency:
    | "30min"
    | "1hour"
    | "3hours"
    | "6hours"
    | "1min"
    | "5min"
    | "15min";
};
