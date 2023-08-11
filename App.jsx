import React, { createContext, useState } from 'react';
import { Child } from './Child';

export const GlobalInfo = createContext();

const App = () => {

  const [color, setColor] = useState('green')

  return (
    <GlobalInfo.Provider value={{ appcolor: color }}>
      <div className='bg-slate-200 min-h-screen text-center font-bold text-5xl'>
        <h1 >App</h1>
        <Child />

      </div>
    </GlobalInfo.Provider>
  );
}
export default App
