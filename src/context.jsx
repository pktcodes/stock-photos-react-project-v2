/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const darkTheme = !isDarkTheme;
    setIsDarkTheme(darkTheme);
    document.body.classList.toggle('dark-theme', darkTheme);
    console.log(document.body);
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
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
