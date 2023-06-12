import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppNavigator} from './src/index';
import {StyleSheet} from 'react-native';

export const App: FC = () => {
  return (
    <GestureHandlerRootView style={styles.gestureRootView}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureRootView: {
    flex: 1,
  },
});
