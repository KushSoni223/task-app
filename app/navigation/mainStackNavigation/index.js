import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import React, {Fragment} from 'react';
import {AuthStackNavigation} from '../authStackNavigation';
import {BottomStackNavigation} from '../bottomTabNavigation';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

export const navigationRef = React.createRef();

export const MainStackNavigation = () => {
  //   const [showSplashScreen, setHideSplashScreen] = useState(true);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setHideSplashScreen(false);
  //     }, 2200);
  //   }, []);

  const isUserLogin = useSelector(state => {
    return state.authReducer.isUserLogin;
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
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
        {isUserLogin ? (
          <Fragment>
            <Stack.Screen
              name="bottomStackNavigation"
              component={BottomStackNavigation}
              options={{
                transitionSpec: {
                  open: TransitionSpecs.BottomSheetSlideInSpec,
                  close: TransitionSpecs.BottomSheetSlideInSpec,
                },
              }}
            />
          </Fragment>
        ) : (
          <Stack.Screen
            name="authStackNavigation"
            component={AuthStackNavigation}
            options={{
              transitionSpec: {
                open: TransitionSpecs.BottomSheetSlideInSpec,
                close: TransitionSpecs.BottomSheetSlideInSpec,
              },
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
