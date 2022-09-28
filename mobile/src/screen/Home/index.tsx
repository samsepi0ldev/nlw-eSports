import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text } from 'react-native'

import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { styles } from './styles'
import nlwLogo from '../../assets/logo-nlw-esports.png'
import { CardGame } from '../../components/CardGame'
import { useNavigation } from '@react-navigation/native'
import { GameParam } from '../../@types/navigation'

interface GamesProps {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number,
  }
}

export function Home () {
  const [games, setGames] = useState<GamesProps[]>([])
  const navigation = useNavigation()
  function goToScreenGame (data: GameParam) {
    navigation.navigate('game', data)
  }
  useEffect(() => {
    fetch('http://192.168.0.103:3333/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logo}
          source={nlwLogo} />
        <Heading
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...' />
        <FlatList
          data={games}
          keyExtractor={data => data.id}
          renderItem={({ item }) => (
            <CardGame
              onPress={() => goToScreenGame(item)}
              data={item} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.content}
          contentContainerStyle={games.length > 0 ? styles.containerList: styles.emptyListContent}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>Não há anúncios publicados ainda.</Text>
          } />
      </SafeAreaView>
    </Background>
  )
}
