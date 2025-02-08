import {colors, fonts, fontSize, size} from '../../theme';

export const mainView = () => ({
  flexGrow: 1,
  backgroundColor: 'white',
  justifyContent: 'space-evenly',
});
export const outerVideoView = () => ({
  height: size.moderateScale(200),
  backgroundColor: '#C2DED1',
  borderRadius: size.moderateScale(20),
  marginHorizontal: size.moderateScale(15),
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderWidth: size.moderateScale(2),
  borderColor: '#85B4A1',
});

export const innerVideoView = () => ({
  borderRadius: size.moderateScale(17),
  height: '99%',
  width: '99%',
  overflow: 'hidden',
});
export const videoView = () => ({
  height: '100%',
  width: '100%',
  objectFit: 'contain',
  zIndex: 100,
});
export const playPauseButtonView = () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  zIndex: 1,
});
export const playPauseButtonInnerView = () => ({
  height: size.moderateScale(50),
  width: size.moderateScale(50),
  borderRadius: size.moderateScale(50),
  backgroundColor: colors.darkThem.semiTransBlack,
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
});
export const playImageStyle = () => ({
  tintColor: '#ffffff',
  height: size.moderateScale(24),
  width: size.moderateScale(24),
});

// bottom button container
export const bottomControlButtonsView = () => ({
  height: size.moderateScale(50),
  width: size.moderateScale(50),
  backgroundColor: '#85B4A1',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(100),
});
export const bottomControlPanelView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
});
export const bottomControlButtonsLeftRightView = () => ({
  height: size.moderateScale(40),
  width: size.moderateScale(40),
  borderColor: '#85B4A1',
  borderWidth: size.moderateScale(1),
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(100),
});
export const pauseButtonStyle = () => ({
  height: size.moderateScale(16),
  width: size.moderateScale(16),
  borderRadius: size.moderateScale(2),
  backgroundColor: '#85B4A1',
});

// Scoring View
export const outerScoringView = () => ({
  height: size.moderateScale(200),
  backgroundColor: '#C2DED1',
  borderRadius: size.moderateScale(20),
  marginHorizontal: size.moderateScale(20),
  justifyContent: 'center',
  borderWidth: size.moderateScale(2),
  borderColor: '#85B4A1',
});
export const dislikeIconView = () => ({
  position: 'absolute',
  left: size.moderateScale(-15),
  zIndex: 10000,
});
export const happyIconView = () => ({
  position: 'absolute',
  top: -size.moderateScale(15),
  alignSelf: 'center',
  zIndex: 10000,
});
export const likeIconView = () => ({
  position: 'absolute',
  right: -size.moderateScale(15),
  alignSelf: 'flex-end',
  zIndex: 10000,
});
export const unHappyIconView = () => ({
  position: 'absolute',
  bottom: -size.moderateScale(15),
  justifyContent: 'flex-end',
  alignSelf: 'center',
  zIndex: 10000,
});
export const userInteractionAndFeelIconView = () => ({
  height: size.moderateScale(40),
  width: size.moderateScale(40),
});
export const userInteractionAndFeelMovingIconView = () => ({
  height: size.moderateScale(30),
  width: size.moderateScale(30),
  borderRadius: size.moderateScale(30),
  backgroundColor: '#85B4A1',
  alignSelf: 'center',
  zIndex: 1000000,
});
export const positionTextView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: size.moderateScale(20),
  gap: size.moderateScale(16),
});
export const xPositionText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.robotoMedium,
  color: colors.darkThem.white,
});
export const yPositionText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.robotoMedium,
  color: colors.darkThem.white,
});
