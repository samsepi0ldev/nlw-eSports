import React from 'react'
import {
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { THEME } from '../../themes'

type CardGameType = {
  id: string
  title: string
  bannerUrl: string
  _count: { ads: number } 
}

interface GameCardProps extends TouchableOpacityProps {
  data: CardGameType
}

export function CardGame ({ data, ...rest }: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{ uri: data.bannerUrl }}>
        <LinearGradient
          style={styles.gradientBg}
          colors={THEME.COLOR.FOOTER}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.count}>{data._count.ads} anúncio(s)</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
