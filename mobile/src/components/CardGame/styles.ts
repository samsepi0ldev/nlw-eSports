import { THEME } from './../../themes/index';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginRight: 24
  },
  cover: {
    width: 240,
    height: 320,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-end'
  },
  gradientBg: {
    width: '100%',
    height: 120,
    justifyContent: 'flex-end',
    padding: 16
  },
  title: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.SIZE.SM,
    color: THEME.COLOR.TEXT
  },
  count: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.SIZE.XS,
    color: THEME.COLOR.ZINC_400
  }
})
