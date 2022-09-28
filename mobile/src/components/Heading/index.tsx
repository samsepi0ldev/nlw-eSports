import { View, Text } from 'react-native'

import { styles } from './styles'

interface HeadingProps {
  title: string
  subtitle: string
}

export function Heading ({ subtitle, title }: HeadingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}
