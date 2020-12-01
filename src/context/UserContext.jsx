import React, { useState } from 'react';

const UserContext = React.createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: '', password: '' });

  const setUserStore = (item) => {
    setUser(item);
  };

  const store = {
    user: { get: user, set: setUserStore },
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
