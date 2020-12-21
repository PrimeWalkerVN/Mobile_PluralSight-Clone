import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

const UserContext = React.createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const setUserStore = async (item) => {
    if (item == null) setUser(null);
    else {
      try {
        await AsyncStorage.setItem('access_token', item.token);
      } catch (error) {
        // Error saving data
      }
      setUser(item);
    }
  };
  const logout = () => {
    setUser(null);
  };

  const store = {
    user: { get: user, set: setUserStore, logout },
    loading: { get: loading, set: setLoading },
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
