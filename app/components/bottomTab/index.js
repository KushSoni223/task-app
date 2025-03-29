import React from 'react';
import {Pressable, Text, View} from 'react-native';

import * as styles from './styles';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IcCalender, IcLike, IcProfile, IcSearch, size} from '../../theme';

export const BottomTab = props => {
  const {navigation, state, descriptors} = props;

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const insets = useSafeAreaInsets();
  const onTabBarPress = route => {
    // NOTE: for pop to top of stack which is nested inside bottom tab navigation
    if (state.routes[state.index].name === route.name) {
      return;
    }
    navigation.reset({
      routes: [{name: route.name}],
    });
  };

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.bottomTab(insets)}>
      <View style={styles.container()}>
        {state.routes.map((r, index) => {
          const label =
            focusedOptions.tabBarLabel !== undefined
              ? focusedOptions.tabBarLabel
              : focusedOptions.title !== undefined
              ? focusedOptions.title
              : r.name;
          let Icon;

          if (r.name === 'Search') {
            Icon = IcSearch;
          } else if (r.name === 'Events') {
            Icon = IcCalender;
          } else if (r.name === 'Favorites') {
            Icon = IcLike;
          } else if (r.name === 'Profile') {
            Icon = IcProfile;
          }
          const isFocused = state.routes[state.index].name === r.name;

          return (
            <Pressable
              style={styles.iconContainer()}
              key={index.toString()}
              onPress={() => {
                onTabBarPress(r, index);
              }}>
              <Icon
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                strokeWidth={isFocused ? 2 : 1}
                stroke={isFocused ? 'black' : 'transparent'}
                fill={isFocused ? 'transparent' : 'transparent'}
                selected={isFocused ? true : false}
              />

              <Text
                numberOfLines={1}
                adjustsFontSizeToFit={true}
                style={styles.healerTextStyle(isFocused)}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
