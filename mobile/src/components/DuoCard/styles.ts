import { THEME } from './../../themes/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: THEME.COLOR.SHAPE,
    borderRadius: 8,
    padding: 20,
    marginRight: 16,
    alignItems: "center",
  },
  button: {
    flexDirection: 'row',
    backgroundColor: THEME.COLOR.PRIMARY,
    width: '100%',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  textButton: {
    color: THEME.COLOR.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.SIZE.XS,
    marginLeft: 8
  }
})