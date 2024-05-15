import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const totalPrice = count * 40;

  return (
    <CountContext.Provider value={{ count, totalPrice, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);
