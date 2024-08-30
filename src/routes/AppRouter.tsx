import React, { useState, useEffect } from "react";
import { useConfig } from "@/contexts/ConfigContext";
import ConfigScreen from "../components/pages/ConfigScreen";
import MainScreen from "../components/pages/MainScreen";

const AppRouter: React.FC = () => {
  const { config, setConfig } = useConfig();
  const [isConfigured, setIsConfigured] = useState<boolean | null>(null);

  useEffect(() => {
    const savedConfig = localStorage.getItem("userConfig");
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
      setIsConfigured(true);
    } else {
      setIsConfigured(false);
    }
  }, [setConfig]);

  if (isConfigured === null) {
    return <div>Cargando...</div>;
  }

  return isConfigured ? <MainScreen /> : <ConfigScreen />;
};

export default AppRouter;
