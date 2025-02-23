import React, { createContext, useState } from 'react';

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Changed to true for default dark mode

  const toggleTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <UIContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </UIContext.Provider>
  );
};