import React, {useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {
  colors,
  IcPause,
  IcPlayDark,
  IcReloadIcon,
  images,
  size,
} from '../../theme';
import {Videos} from '../../theme/Videos';
import * as styles from './styles';

const VideoScreen = () => {
  // video related states
  const [paused, setPaused] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  // translation related states
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const isGestureActive = useSharedValue(false);
  const [position, setPosition] = useState({x: 0, y: 0});

  // x value mapping state
  const mapRange = (value, inMin, inMax, outMin, outMax) => {
    'worklet';
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  // pan gesture event
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
      isGestureActive.value = true;
    },
    onActive: ({translationX, translationY}, ctx) => {
      let newX = Math.max(-150, Math.min(150, translationX + ctx.x));
      let newY = Math.max(-100, Math.min(100, translationY + ctx.y));

      translateX.value = newX;
      translateY.value = newY;

      const mappedX = mapRange(newX, -150, 150, -100, 100);

      runOnJS(setPosition)({x: mappedX, y: -newY});
    },
    onEnd: ({velocityX, velocityY}) => {
      let finalX = Math.max(-150, Math.min(150, translateX.value));
      let finalY = Math.max(-100, Math.min(100, translateY.value));

      translateX.value = withSpring(finalX, {velocity: velocityX});
      translateY.value = withSpring(finalY, {velocity: velocityY});

      isGestureActive.value = false;

      const mappedX = mapRange(finalX, -150, 150, -100, 100);

      runOnJS(setPosition)({x: mappedX, y: -finalY});
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}, {translateY: translateY.value}],
  }));

  return (
    <GestureHandlerRootView style={styles.mainView()}>
      <View style={styles.outerVideoView()}>
        <View style={styles.innerVideoView()}>
          <Video
            ref={videoRef}
            source={Videos.video}
            paused={paused}
            style={styles.videoView()}
            resizeMode="cover"
            onEnd={() => {
              setPaused(true);
              setVideoEnded(true);
            }}
          />
        </View>
        {paused && (
          <View style={styles.playPauseButtonView()}>
            <TouchableOpacity
              onPress={() => setPaused(!paused)}
              style={styles.playPauseButtonInnerView()}>
              <IcPlayDark
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={'white'}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.positionTextView()}>
        <Text style={styles.xPositionText()}>X : {position.x.toFixed(0)}</Text>
        <Text style={styles.yPositionText()}>Y : {position.y.toFixed(0)}</Text>
      </View>

      <View style={styles.outerScoringView()}>
        <View style={styles.dislikeIconView()}>
          <Image
            source={images.imgDislike}
            style={styles.userInteractionAndFeelIconView()}
          />
        </View>
        <View style={styles.happyIconView()}>
          <Image
            source={images.imgHappy}
            style={styles.userInteractionAndFeelIconView()}
          />
        </View>
        <View style={styles.likeIconView()}>
          <Image
            source={images.imgLike}
            style={styles.userInteractionAndFeelIconView()}
          />
        </View>
        <View style={styles.unHappyIconView()}>
          <Image
            source={images.imgUnhappy}
            style={styles.userInteractionAndFeelIconView()}
          />
        </View>

        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View
            style={[
              styles.userInteractionAndFeelMovingIconView(),
              animatedStyle,
            ]}
          />
        </PanGestureHandler>
      </View>

      <View style={styles.bottomControlPanelView()}>
        <TouchableOpacity
          onPress={() => {
            videoRef?.current?.playAsync?.();
            setPaused(false);
          }}
          style={styles.bottomControlButtonsLeftRightView()}>
          <IcPlayDark
            height={size.moderateScale(20)}
            width={size.moderateScale(20)}
            fill={'#85B4A1'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            videoRef?.current?.pauseAsync?.();
            setPaused(true);
          }}
          style={styles.bottomControlButtonsView()}>
          <IcPause
            height={size.moderateScale(20)}
            width={size.moderateScale(20)}
            fill={'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            videoEnded
              ? (videoRef.current.seek(0),
                setPaused(false),
                setVideoEnded(false))
              : setPaused(true);
          }}
          style={styles.bottomControlButtonsLeftRightView()}>
          {videoEnded ? (
            <IcReloadIcon
              height={size.moderateScale(20)}
              width={size.moderateScale(20)}
              fill3={'#85B4A1'}
            />
          ) : (
            <View style={styles.pauseButtonStyle()} />
          )}
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default VideoScreen;
