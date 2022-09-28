import { THEME } from './../../themes/index';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 18
  },
  label: {
    color: THEME.COLOR.ZINC_300,
    fontSize: THEME.SIZE.XS,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  value: {
    fontFamily: THEME.FONT_FAMILY.BOLD
  }
})