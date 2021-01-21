import React, { useState } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeLangContext = React.createContext();
const ThemeLangProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  const saveTheme = async () => {
    await AsyncStorage.setItem('theme', theme);
  };
  const store = {
    theme: {
      get: theme,
      set: setTheme,
      saveTheme,
    },
  };

  return <ThemeLangContext.Provider value={store}>{children}</ThemeLangContext.Provider>;
};

export { ThemeLangProvider, ThemeLangContext };
