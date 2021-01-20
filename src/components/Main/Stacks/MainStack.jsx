import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import navNames from '../../../constants/navNames';
import { UserContext } from '../../../context/UserContext';
import SplashScreen from '../../Others/SplashScreen';
import Main from '../Main';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();
const MainStack = () => {
  const context = useContext(UserContext);
  if (context.loading.get) {
    return <SplashScreen />;
  }
  return (
    <Stack.Navigator>
      {context.user.get == null ? (
        <Stack.Screen key={navNames.auth} name={navNames.auth} component={AuthStack} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen
          key={navNames.mainTab}
          name={navNames.mainTab}
          component={Main}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};
export default MainStack;
