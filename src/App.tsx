import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from './assets/tailwind.svg'
import shadcnLogo from './assets/shadcn.svg'
import reactRouterLogo from './assets/react-router.svg'

import { Button } from './components/atoms/Button'


function App() {
  const [count, setCount] = useState(0)
  const [animateOut, setAnimateOut] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  useEffect(() => {
    if (animateOut) {
      const timer = setTimeout(() => {
        setAnimateOut(false);
        setAnimateIn(true);
        const timerIn = setTimeout(() => {
          setAnimateIn(false);
        }, 300); // 300ms = 0.3 segundos, la duración de la animación de entrada

        return () => clearTimeout(timerIn);
      }, 300); // 300ms = 0.3 segundos, la duración de la animación de salida

      return () => clearTimeout(timer);
    }
  }, [animateOut]);

  const handleButtonClick = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setCount(count + 1);
    }, 200); // Cambia el estado del contador después de la animación de salida
  };
  return (
    <>
    <div className='flex flex-col h-screen items-center justify-center'>
    <h1 className='text-6xl font-black text-slate-700'>R82 Seed</h1>
      <div className='flex justify-center gap-4 py-6'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="p-4 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="p-4 h-20" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src={tailwindLogo} className="p-4 h-20" alt="Tailwind CSS logo" />
        </a>
        <a href="https://ui.shadcn.com/" target="_blank">
          <img src={shadcnLogo} className="p-4 h-20" alt="Tailwind CSS logo" />
        </a>
        <a href="https://reactrouter.com/en/main" target="_blank">
          <img src={reactRouterLogo} className="p-4 h-20" alt="React Router logo" />
        </a>
        
      </div>
      <div className="m-1">
      <Button variant="default" onClick={handleButtonClick}>
          Contador: 
          <span className={`ml-2 font-black ${animateOut ? 'animate-ping-out' : ''} ${animateIn ? 'animate-ping-in' : ''}`}>{count}</span>
        </Button></div>
      
      <div className="m-8">
        
        <p className='mt-8'>
          Edita <code>src/App.tsx</code> y guarda para probar HMR.
        </p>
      </div>
      <a href='https://github.com/ronaldmindiola/r82-seed' className="read-the-docs">
        Click aquí para obtener más información.
      </a>
    </div>
    </>
  )
}

export default App
