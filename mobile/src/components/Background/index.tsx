import React from 'react'
import { ImageBackground } from 'react-native'

import bgGalaxy from '../../assets/background-galaxy.png'
import { styles } from './styles'

interface BackgroundProps {
  children: React.ReactNode
}

export function Background ({ children }: BackgroundProps) {
  return (
    <ImageBackground
      source={bgGalaxy}
      defaultSource={bgGalaxy}
      style={styles.container}>
      {children}
    </ImageBackground>
  )
}
