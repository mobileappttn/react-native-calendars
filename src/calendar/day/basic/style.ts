import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../../style';
import {Theme} from '../../../types';
import constants from '../../../commons/constants';

export default function styleConstructor(theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      alignItems: 'center'
    },
    base: {
      width: 32,
      height: 32,
      alignItems: 'center'
    },
    text: {
      marginTop: constants.isAndroid ? 0 : 2,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      ...appStyle.textDayStyle
    },
    alignedText: {
      marginTop: constants.isAndroid ? 4 : 6
    },
    selected: {
//       backgroundColor: appStyle.selectedDayBackgroundColor,
//       borderRadius: 16
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor,
      borderRadius: 16
    },
    todayText: {
      color: appStyle.todayTextColor
    },
    selectedText: {
      color: '#333333',
      fontWeight: constants.isAndroid ? 'bold': '500',
    },
    underlineStyle: {
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: '#333333',
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    inactiveText: {
      color: appStyle.textInactiveColor
    },
    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      borderRadius: 2,
      opacity: 0,
      ...appStyle.dotStyle
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    disabledDot: {
      backgroundColor: appStyle.disabledDotColor || appStyle.dotColor
    },
    todayDot: {
      backgroundColor: appStyle.todayDotColor || appStyle.dotColor
    },
    // @ts-expect-error
    ...(theme['stylesheet.day.basic'] || {})
  });
}
