import { StyleSheet } from 'react-native'

import { THEME } from '../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    marginTop: 120,
    marginBottom: 48
  },
  content: {
    marginTop: 20
  },
  containerList: {
    paddingLeft: 32,
    paddingRight: 68
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
