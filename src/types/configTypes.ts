// src/types/configTypes.ts

export interface Config {
  location: string;
  tempUnit: "celsius" | "fahrenheit";
  speedUnit: "kph" | "mph";
  updateFrequency: "30min" | "1hour" | "3hours" | "6hours";
}
