import { StyleSheet, Platform, NativeModules } from 'react-native'

const { StatusBarManager } = NativeModules
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: STATUSBAR_HEIGHT + 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24
  },
  logo: {
    height: 40
  }
})