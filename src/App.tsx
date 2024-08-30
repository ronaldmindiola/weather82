// src/App.tsx
import { ConfigProvider } from "@/contexts/ConfigContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <ConfigProvider>
        <AppRouter />
      </ConfigProvider>
    </>
  );
}

export default App;
