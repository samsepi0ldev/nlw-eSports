import { View, Text, Modal, TouchableOpacity, ModalProps, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { CheckCircle, X } from 'phosphor-react-native'
import * as Clipboard from 'expo-clipboard'

import { THEME } from '../../themes'
import { styles } from './styles'

interface DuoMatch extends ModalProps {
  onClose: () => void
  discord: string
}

export function DuoMatch ({ onClose, discord, ...rest }: DuoMatch) {
  const [isCoping, setIsCoping] = useState(false)
  async function copyToClipboard (value: string) {
    setIsCoping(true)
    await Clipboard.setStringAsync(value)
    setIsCoping(false)
    Alert.alert('Discord copiado!', 'Usuário copiado para você colocar no Discord.')
  }
  return (
    <Modal
      {...rest}
      statusBarTranslucent
      animationType='fade'
      transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={onClose}
            style={styles.close}>
            <X size={20} color={THEME.COLOR.ZINC_500} />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLOR.SUCCESS} />
          <Text style={styles.title}>Let's play!</Text>
          <Text style={styles.subtitle}>Agora é só começar a jogar!</Text>
          <Text style={styles.caption}>Adicione no Discord</Text>
          <TouchableOpacity
            onPress={() => copyToClipboard(discord)}
            style={styles.clipboardContainer}>
            {isCoping 
              ? <ActivityIndicator size={24} color='#fff' /> 
              : <Text style={styles.clipboardText}>{discord}</Text>}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
