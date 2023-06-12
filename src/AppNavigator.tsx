import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {One, Two, Three} from './index';

const Tab = createBottomTabNavigator();

const iconsConfig: Record<string, Record<string, string>> = {
  First: {
    default: 'ios-information-circle-outline',
    focused: 'ios-information-circle',
  },
  Second: {
    default: 'ios-list-outline',
    focused: 'ios-list',
  },
  Third: {
    default: 'bug-outline',
    focused: 'bug',
  },
};

export const AppNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color, size}) => {
          const iconName = focused
            ? iconsConfig[route.name].focused
            : iconsConfig[route.name].default;

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={'First'} component={One} />
      <Tab.Screen name={'Second'} component={Two} />
      <Tab.Screen name={'Third'} component={Three} />
    </Tab.Navigator>
  );
};
