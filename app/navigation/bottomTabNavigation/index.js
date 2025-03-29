/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform} from 'react-native';
import {BottomTab} from '../../components/bottomTab';
import {HomeStackNavigation} from '../homeStackNavigation';
import {ProfileStackNavigation} from '../profileStackNavigation';
import {FavoriteEventListStackNavigation} from '../favoriteEventStackNavigation';
import {EventListStackNavigation} from '../eventListStackNavigation';

const Tab = createBottomTabNavigator();

export const BottomStackNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarHideOnKeyboard: Platform.OS === 'android' ? true : false,
        tabBarShowLabel: false,
      })}
      tabBar={props => {
        return <BottomTab {...props} />;
      }}>
      <Tab.Screen name="Search" component={HomeStackNavigation} />
      <Tab.Screen name="Events" component={EventListStackNavigation} />
      <Tab.Screen
        name="Favorites"
        component={FavoriteEventListStackNavigation}
      />
      <Tab.Screen name="Profile" component={ProfileStackNavigation} />
    </Tab.Navigator>
  );
};
