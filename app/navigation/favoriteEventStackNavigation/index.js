import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {FavoriteEventListScreen} from '../../screens/favouriteEventListScreen';

const FavoriteEventListStack = createStackNavigator();

export const FavoriteEventListStackNavigation = () => {
  return (
    <FavoriteEventListStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        transitionSpec: {
          open: {
            animation: 'spring',
            config: {damping: 20, stiffness: 150},
          },
          close: {
            animation: 'spring',
            config: {damping: 20, stiffness: 150},
          },
        },

        cardStyleInterpolator: ({current, next, layouts}) => {
          const translateX = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          });

          const translateBack = next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -layouts.screen.width],
              })
            : translateX;

          const opacity = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          });

          const scale = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.9, 1],
          });

          return {
            cardStyle: {
              transform: [
                {translateX: next ? translateBack : translateX},
                {scale},
              ],
              opacity,
              backgroundColor: 'transparent',
            },
          };
        },
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <FavoriteEventListStack.Screen
        name="favoriteEventListScreen"
        component={FavoriteEventListScreen}
      />
    </FavoriteEventListStack.Navigator>
  );
};
