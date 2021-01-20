import React, { useState } from 'react';

const SnackBarContext = React.createContext();
const SnackBarProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState('OK');
  const [onPress, setOnPress] = useState(() => setVisible(false));
  const store = {
    snackbar: {
      get: visible,
      set: setVisible,
      getData: data,
      setData,
      getLabel: label,
      setLabel,
      getOnPress: onPress,
      setOnPress,
    },
    loading: { get: loading, set: setLoading },
  };

  return <SnackBarContext.Provider value={store}>{children}</SnackBarContext.Provider>;
};

export { SnackBarProvider, SnackBarContext };
