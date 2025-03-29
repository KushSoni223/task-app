import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {MainStackNavigation} from './navigation/mainStackNavigation';
import {persistor, store} from './redux';

const App = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {/* <VideoScreen /> */}
          <MainStackNavigation />
        </PersistGate>
      </Provider>
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
