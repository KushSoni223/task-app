import {colors, fonts, fontSize, size} from '../../theme';

export const container = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: size.moderateScale(60),
  backgroundColor: colors.lightThem.white,
});
export const mainView = () => ({
  backgroundColor: colors.lightThem.white,
});

export const iconContainer = () => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const bottomTab = insets => ({
  backgroundColor: colors.lightThem.white,
  justifyContent: 'center',
  marginBottom: insets.bottom,
  shadowColor: colors.lightThem.background,
  shadowOffset: {
    width: 0,
    height: size.moderateScale(-4),
  },
  shadowOpacity: size.moderateScale(0.05),
  shadowRadius: size.moderateScale(3),
  elevation: size.moderateScale(13),
});

export const textStyle = isFocused => ({
  color: isFocused ? colors.lightThem.white : colors.lightThem.background,
  paddingTop: size.moderateScale(3),
  textAlign: 'center',
  fontSize: fontSize.littleSmall,
  fontFamily: fonts.poppinsMedium,
});
export const healerTextStyle = isFocused => ({
  color: isFocused ? colors.lightThem.black : colors.lightThem.black,
  paddingTop: size.moderateScale(3),
  textAlign: 'center',
  fontSize: fontSize.littleSmall,
  fontFamily: isFocused ? fonts.robotoMedium : fonts.robotoRegular,
});
