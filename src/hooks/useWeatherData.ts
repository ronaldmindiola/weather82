// src/hooks/useWeatherData.ts
import { useEffect, useState, useCallback } from "react";
import { WeatherData } from "../types/weatherTypes";
import { Config } from "../types/configTypes";

export const useWeatherData = (config: Config) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = useCallback(async () => {
    const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
    const unit = config.tempUnit === "celsius" ? "metric" : "imperial";

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${config.location}&appid=${apiKey}&units=${unit}`
      );

      if (!response.ok) {
        throw new Error("Error fetching weather data");
      }

      const data = await response.json();

      setWeatherData({
        name: data.name,
        temperature: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        pressure: data.main.pressure,
        sea_level: data.main.sea_level || 0, // Manejo de valores que podrían no estar presentes
        grnd_level: data.main.grnd_level || 0,
        visibility: data.visibility,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        coordinates: {
          lat: data.coord.lat,
          lon: data.coord.lon,
        },
        sys: {
          country: data.sys.country,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
        },
        cod: data.cod,
        weather: data.weather[0], // Asume que siempre hay al menos un elemento en el array
        wind: data.wind,
      });
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(
        "No se pudo obtener la información del clima. Inténtalo de nuevo más tarde."
      );
    }
  }, [config.location, config.tempUnit]);

  const getUpdateInterval = useCallback((config: Config) => {
    switch (config.updateFrequency) {
      case "30min":
        return 30 * 60 * 1000;
      case "1hour":
        return 60 * 60 * 1000;
      case "3hours":
        return 3 * 60 * 60 * 1000;
      case "6hours":
        return 6 * 60 * 60 * 1000;
      default:
        return 60 * 60 * 1000;
    }
  }, []);

  useEffect(() => {
    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, getUpdateInterval(config));
    return () => clearInterval(interval);
  }, [fetchWeatherData, config]);

  return { weatherData, error };
};
