import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

const UserContext = React.createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const setUserStore = async (item) => {
    if (item == null) setUser(null);
    else {
      setUser(item);
    }
  };
  const setTokenStore = async (token) => {
    try {
      await AsyncStorage.setItem('access_token', token);
      setToken(token);
    } catch (error) {
      // Error saving data
    }
  };
  const logout = () => {
    setUser(null);
    AsyncStorage.clear();
  };

  const store = {
    user: { get: user, set: setUserStore, getToken: token, setToken: setTokenStore, logout },
    loading: { get: loading, set: setLoading },
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
