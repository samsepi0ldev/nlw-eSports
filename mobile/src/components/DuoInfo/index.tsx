import { View, Text, ColorValue } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface DuoInfoProps {
  label: string
  value: string
  colorValue?: ColorValue
}

export function DuoInfo ({ label, value, colorValue }: DuoInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text numberOfLines={1} style={[styles.value, { color: colorValue ?? '#FFF'}]}>{value}</Text>
    </View>
  )
}