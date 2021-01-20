import React, { useState } from 'react';
import { Appearance } from 'react-native';

const ThemeLangContext = React.createContext();
const ThemeLangProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  const store = {
    theme: {
      get: theme,
      set: setTheme,
    },
  };

  return <ThemeLangContext.Provider value={store}>{children}</ThemeLangContext.Provider>;
};

export { ThemeLangProvider, ThemeLangContext };
