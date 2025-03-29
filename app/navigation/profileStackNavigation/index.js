import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/actions';

export const ProfileStackNavigation = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Profile Screen</Text>

      <Text
        onPress={async () => {
          await dispatch(logout());
        }}>
        logout
      </Text>
    </View>
  );
};
