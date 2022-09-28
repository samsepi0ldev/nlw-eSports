import { THEME } from './../../themes/index';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 32
  },
  title: {
    color: THEME.COLOR.TEXT,
    fontSize: THEME.SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BLACK
  },
  subtitle: {
    color: THEME.COLOR.ZINC_400,
    fontSize: THEME.SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
})
