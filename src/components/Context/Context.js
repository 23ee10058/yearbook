

import React, { createContext, useState, useContext } from 'react';

// Create the context
const CountContext = createContext();

const CountProvider = ({ children }) => {
  // State hooks inside a component
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState('flex');

  const modeChange = () => {
    setDisplay((prevDisplay) => (prevDisplay === 'flex' ?'none' : 'flex'));
    setCount((prevCount) => prevCount + 1);
    
    // As state updates are asynchronous, use effect for logging count
    console.log(count); // This might not reflect the updated count immediately
  };

  return (
    <CountContext.Provider value={{ modeChange, count }}>
      {children}
    </CountContext.Provider>
  );
};

// Custom hook to use the context easily
const useCountContext = () => useContext(CountContext);

export { CountProvider, useCountContext };