import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { DuoInfo } from '../DuoInfo'
import { THEME } from '../../themes'
import { GameController } from 'phosphor-react-native'

export function DuoCard () {
  return (
    <View style={styles.container}>
      <DuoInfo
        label='Nome'
        value='Elivelton S' />
      <DuoInfo
        label='Tempo de jogo'
        value='2 ano(s)' />
      <DuoInfo
        label='Disponibilidade'
        value={`3 dias \u2022 18h - 20h`} />
      <DuoInfo
        label='Chamada de áudio?'
        value='Sim'
        colorValue={THEME.COLOR.SUCCESS} />
      <TouchableOpacity style={styles.button}>
        <GameController size={20} color={THEME.COLOR.TEXT} />
        <Text style={styles.textButton}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}
