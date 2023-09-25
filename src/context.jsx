/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  const storedDarkMode = localStorage.getItem('darkTheme');
  if (storedDarkMode === null) {
    return prefersDarkMode;
  }
  if (storedDarkMode !== null) {
    return storedDarkMode === 'true';
  }
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('cat');

  const toggleDarkTheme = () => {
    const darkTheme = !isDarkTheme;
    setIsDarkTheme(darkTheme);
    localStorage.setItem('darkTheme', darkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

AppProvider.propTypes = {
  children: PropTypes.element,
};
