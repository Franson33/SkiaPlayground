import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/index';

export const App: FC = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
