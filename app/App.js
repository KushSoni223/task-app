import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import VideoScreen from './screens/videoScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <VideoScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
});

export default App;
