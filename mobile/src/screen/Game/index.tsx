import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text } from 'react-native'

import { GameParam } from '../../@types/navigation'
import { Background } from '../../components/Background'
import { DuoCard } from '../../components/DuoCard'
import { DuoMatch } from '../../components/DuoMatch'
import { Header } from '../../components/Header'
import { Heading } from '../../components/Heading'
import { styles } from './styles'

export interface AdsProps {
  id: string,
  name: string,
  hoursEnd: string,
  hoursStart: string,
  useVoiceChannel: boolean,
  weekDays: number[],
  yearsPlaying: number,
}

export function Game () {
  const router = useRoute()
  const { bannerUrl, id, title } = router.params as GameParam
  const [ads, setAds] = useState<AdsProps[]>([])
  const [selectedDiscord, setSelectedDiscord] = useState('')

  function getDiscordUser (adId: string) {
    fetch(`http://192.168.0.103:3333/ad/${adId}/discord`)
      .then(res => res.json())
      .then(data => setSelectedDiscord(data.discord))
  }
  useEffect(() => {
    fetch(`http://192.168.0.103:3333/games/${id}/ads`)
      .then(res => res.json())
      .then(data => setAds(data))
  }, [])
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Header />
        <Image
          resizeMode='cover'
          style={styles.banner}
          source={{ uri: bannerUrl }} />
        <Heading
          title={title}
          subtitle='Conecte-se e comece a jogar!' />
        <FlatList
          data={ads}
          keyExtractor={data => data.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => getDiscordUser(item.id)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
          contentContainerStyle={ads.length > 0 ? styles.contentList : styles.emptyListContent}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>Não há anúncios publicados ainda.</Text>
          } />
        <DuoMatch
          visible={selectedDiscord.length > 0}
          discord={selectedDiscord}
          onClose={() => setSelectedDiscord('')} />
      </SafeAreaView>
    </Background>
  )
}
