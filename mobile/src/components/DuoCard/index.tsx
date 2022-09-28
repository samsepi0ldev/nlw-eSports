import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { DuoInfo } from '../DuoInfo'
import { THEME } from '../../themes'
import { GameController } from 'phosphor-react-native'
import { AdsProps } from '../../screen/Game'

interface DuoCardProps {
  onConnect: () => void
  data: AdsProps
}

export function DuoCard ({ onConnect, data }: DuoCardProps) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label='Nome'
        value={data.name} />
      <DuoInfo
        label='Tempo de jogo'
        value={`${data.yearsPlaying} ano(s)`} />
      <DuoInfo
        label='Disponibilidade'
        value={`4${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hoursEnd}`} />
      <DuoInfo
        label='Chamada de áudio?'
        value={data.useVoiceChannel ? 'Sim': 'Não'}
        colorValue={data.useVoiceChannel ? THEME.COLOR.SUCCESS : THEME.COLOR.WARNING} />
      <TouchableOpacity
        onPress={onConnect}
        style={styles.button}>
        <GameController size={20} color={THEME.COLOR.TEXT} />
        <Text style={styles.textButton}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}
