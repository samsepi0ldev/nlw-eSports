import { THEME } from './../../themes/index';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  banner: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 24
  },
  containerList: {
    marginTop: 16,
    width: '100%'
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start'
  },
  emptyListContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyListText: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.SIZE.XS,
    color: THEME.COLOR.ZINC_300
  }
})
