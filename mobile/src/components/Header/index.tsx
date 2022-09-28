import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CaretLeft } from 'phosphor-react-native'

import nlwLogo from '../../assets/logo-nlw-esports.png'
import { THEME } from '../../themes'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'



export function Header () {
  const navigation = useNavigation()
  function goBackScreen () {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBackScreen}>
        <CaretLeft size={32} color={THEME.COLOR.TEXT} />
      </TouchableOpacity>
      <Image
        resizeMode='contain'
        style={styles.logo}
        source={nlwLogo} />
        <View style={{ width: 32 }} />
    </View>
  )
}