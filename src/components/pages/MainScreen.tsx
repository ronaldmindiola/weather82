// src/components/MainScreen.tsx
import React from "react";
import { useConfig } from "../../contexts/ConfigContext";
import { useWeatherData } from "../../hooks/useWeatherData";
import LoadingSpinner from "../atoms/LoadingSpinner";
import rainIcon from "../../assets/icons/rain.svg";
import thermometerMinIcon from "../../assets/icons/thermometer-colder.svg";
import thermometerWarmerIcon from "../../assets/icons/thermometer-warmer.svg";
import windsockIcon from "../../assets/icons/windsock.svg";
import humidityIcon from "../../assets/icons/humidity.svg";
import snowflakeIcon from "../../assets/icons/snowflake.svg";
import barometerIcon from "../../assets/icons/barometer.svg";
import binocularsIcon from "../../assets/icons/binoculars.svg";
import sunriseIcon from "../../assets/icons/sunrise-fill.svg";
import sunsetIcon from "../../assets/icons/sunset-fill.svg";

const MainScreen: React.FC = () => {
  const { config } = useConfig();
  const { weatherData, error } = useWeatherData(config);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!weatherData) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-lg mx-auto rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center">
        <div className="">
          <h3 className="text-lg font-bold mb-2 text-center">
            Weather in {weatherData.name}, {weatherData.sys.country}
          </h3>
        </div>
        <div className="">
          <img src={snowflakeIcon} alt="Weather Icon" height={64} width={64} />
        </div>
      </div>
      <div className="text-center">
        <div className="grid grid-cols-2 p-4">
          <img src={rainIcon} height={256} width={256} alt="Rain Icon" />
          <div className="">
            <h1 className="text-6xl font-black">{weatherData.temperature}°</h1>
            <h2 className="font-bold text-2xl">{weatherData.weather.main}</h2>
            <h2 className="font-semibold text-1xl capitalize">
              {weatherData.weather.description}
            </h2>
            <div className="flex text-center">
              <div className="">
                <img
                  src={thermometerMinIcon}
                  height={64}
                  width={64}
                  alt="Rain Icon"
                  className="-mb-2"
                />
                <span className="text-xs ">{weatherData.temp_min}°</span>
              </div>
              <div className="">
                <img
                  src={thermometerWarmerIcon}
                  height={64}
                  width={64}
                  alt="Rain Icon"
                  className="-mb-2"
                />
                <span className="text-xs ">{weatherData.temp_min}°</span>
              </div>

              <div className="">
                <img
                  src={windsockIcon}
                  height={64}
                  width={64}
                  alt="Rain Icon"
                  className="-mb-2"
                />
                <span className="text-xs ">{weatherData.windSpeed}m/s</span>
              </div>
              <div className="">
                <img
                  src={humidityIcon}
                  height={64}
                  width={64}
                  alt="Rain Icon"
                  className="-mb-2"
                />
                <span className="text-xs ">{weatherData.humidity}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-4">
        <div className=" flex flex-col justify-center items-center">
          <img
            src={barometerIcon}
            height={64}
            width={64}
            alt="Barometer Icon"
          />
          <h1 className="text-sm">{weatherData.pressure} hPa</h1>
          <h2 className="font-medium text-xs text-center">
            Presión atmosférica
          </h2>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <img
            src={binocularsIcon}
            height={64}
            width={64}
            alt="Barometer Icon"
          />
          <h1 className="text-sm">{weatherData.visibility} Metros</h1>
          <h2 className="font-medium text-xs text-center">Visibility</h2>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <img src={sunriseIcon} height={64} width={64} alt="Barometer Icon" />
          <h1 className="text-sm">
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
          </h1>
          <h2 className="font-medium text-xs text-center">Amanecer</h2>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <img src={sunsetIcon} height={64} width={64} alt="Barometer Icon" />
          <h1 className="text-sm">
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
          </h1>
          <h2 className="font-medium text-xs text-center">Atardecer</h2>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
