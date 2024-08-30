import React, { useState, useEffect } from "react";
import { useConfig } from "@/contexts/ConfigContext";
import { Button } from "../atoms/Button";

const ConfigScreen: React.FC = () => {
  const { config, setConfig } = useConfig();
  const [currentConfig, setCurrentConfig] = useState<Config | null>(null);

  useEffect(() => {
    const savedConfig = localStorage.getItem("userConfig");
    if (savedConfig) {
      setCurrentConfig(JSON.parse(savedConfig));
    }
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userConfig", JSON.stringify(config));
    setCurrentConfig(config);
    alert("Configuración guardada con éxito");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-stone-900">Configuración</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ubicación
          </label>
          <input
            type="search"
            id="location"
            name="location"
            value={config.location}
            onChange={handleChange}
            placeholder="Buscar ciudad..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tempUnit"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Unidad de temperatura
          </label>
          <select
            id="tempUnit"
            name="tempUnit"
            value={config.tempUnit}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="celsius">Celsius (°C)</option>
            <option value="fahrenheit">Fahrenheit (°F)</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="speedUnit"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Unidad de velocidad del viento
          </label>
          <select
            id="speedUnit"
            name="speedUnit"
            value={config.speedUnit}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="kph">Kilómetros por hora (km/h)</option>
            <option value="mph">Millas por hora (mph)</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="notifications"
              checked={config.notifications}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">
              Activar notificaciones
            </span>
          </label>
        </div>

        <div className="mb-4">
          <label
            htmlFor="updateFrequency"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Frecuencia de actualización
          </label>
          <select
            id="updateFrequency"
            name="updateFrequency"
            value={config.updateFrequency}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1min">Cada minuto</option>
            <option value="5min">Cada 5 minutos</option>
            <option value="15min">Cada 15 minutos</option>
            <option value="30min">Cada 30 minutos</option>
            <option value="1hour">Cada hora</option>
            <option value="3hours">Cada 3 horas</option>
            <option value="6hours">Cada 6 horas</option>
          </select>
        </div>

        <Button type="submit" className="w-full">
          Guardar configuración
        </Button>
      </form>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Configuración actual:</h2>
        <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
          {currentConfig
            ? JSON.stringify(currentConfig, null, 2)
            : "No hay configuración guardada"}
        </pre>
      </div>
    </div>
  );
};

export default ConfigScreen;
