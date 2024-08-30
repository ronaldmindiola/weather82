// src/contexts/ConfigContext.tsx
import React, { createContext, useState, useContext, useEffect } from "react";

type Config = {
  location: string;
  tempUnit: "celsius" | "fahrenheit";
  speedUnit: "kph" | "mph";
  notifications: boolean;
  updateFrequency:
    | "1min"
    | "5min"
    | "15min"
    | "30min"
    | "1hour"
    | "3hours"
    | "6hours";
};

type ConfigContextType = {
  config: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config>>;
};

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
};

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [config, setConfig] = useState<Config>({
    location: "",
    tempUnit: "celsius",
    speedUnit: "kph",
    notifications: false,
    updateFrequency: "1hour",
  });

  useEffect(() => {
    const savedConfig = localStorage.getItem("userConfig");
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }
  }, []);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};
