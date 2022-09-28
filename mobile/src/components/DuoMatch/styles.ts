import { Dimensions, StyleSheet } from 'react-native'

import { THEME } from '../../themes'

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: THEME.COLOR.OVERLAY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: Dimensions.get('window').width - 64,
    backgroundColor: THEME.COLOR.SHAPE,
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 40,
    marginLeft: 64,
    marginRight: 64,
    alignItems: 'center'
  },
  close: {
    position: 'absolute',
    top: 16,
    right: 16
  },
  title: {
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.SIZE.MD,
    color: THEME.COLOR.TEXT,
    marginTop: 24
  },
  subtitle: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.SIZE.SM,
    color: THEME.COLOR.ZINC_400,
    marginTop: 4
  },
  caption: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLOR.TEXT,
    marginTop: 24
  },
  clipboardContainer: {
    marginTop: 8,
    borderRadius: 4,
    backgroundColor: THEME.COLOR.ZINC_900,
    width: 230,
    paddingVertical: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  clipboardText: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.SIZE.SM, color: THEME.COLOR.TEXT
  }
})
