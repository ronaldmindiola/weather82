// src/components/WeatherIcon.tsx
import React from "react";
import { Icon } from "@iconify-icon/react";

interface WeatherIconProps {
  icon: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ icon }) => {
  const iconMapping: { [key: string]: string } = {
    "01d": "meteocons:day-sunny-fill",
    "01n": "meteocons:night-clear",
    "02d": "meteocons:day-cloudy-fill",
    "02n": "meteocons:night-cloudy-fill",
    "03d": "meteocons:cloudy-fill",
    "03n": "meteocons:cloudy-fill",
    "04d": "meteocons:cloudy-fill",
    "04n": "meteocons:cloudy-fill",
    "09d": "meteocons:showers-fill",
    "09n": "meteocons:showers-fill",
    "10d": "meteocons:rain-fill",
    "10n": "meteocons:rain-fill",
    "11d": "meteocons:thunderstorm-fill",
    "11n": "meteocons:thunderstorm-fill",
    "13d": "meteocons:snow-fill",
    "13n": "meteocons:snow-fill",
    "50d": "meteocons:fog-fill",
    "50n": "meteocons:fog-fill",
  };

  return (
    <Icon
      icon={iconMapping[icon] || "meteocons:question"}
      height="256"
      width="256"
      className="border"
    />
  );
};

export default WeatherIcon;
