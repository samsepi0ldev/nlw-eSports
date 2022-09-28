import React from 'react'
import { FlatList, Image, SafeAreaView } from 'react-native'

import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { styles } from './styles'
import nlwLogo from '../../assets/logo-nlw-esports.png'
import { CardGame } from '../../components/CardGame'
import { useNavigation } from '@react-navigation/native'
import { GameParam } from '../../@types/navigation'


export function Home () {
  const games = [
    {
      "id": "ef95c8c5-70d1-4ed3-883f-9368b5b0d9f3",
      "title": "League of Legends",
      "bannerUrl": "https://i.ibb.co/TrBF22N/league-of-legends.png",
      "_count": {
        "ads": 13
      }
    },
    {
      "id": "a42ca4a2-750a-44be-99ba-a561d266b4f7",
      "title": "Dota 2",
      "bannerUrl": "https://i.ibb.co/yfTjBd2/dota-2.png",
      "_count": {
        "ads": 0
      }
    },
    {
      "id": "dfb47c4b-3ccf-46fe-bcfd-6f930c6b19b7",
      "title": "CS-GO",
      "bannerUrl": "https://i.ibb.co/hgms0g2/cs-go.png",
      "_count": {
        "ads": 0
      }
    },
    {
      "id": "1a8deb86-2f35-4627-aa03-ee56406b9b3f",
      "title": "APEX Legends",
      "bannerUrl": "https://i.ibb.co/Q979Qkd/apex.png",
      "_count": {
        "ads": 0
      }
    },
    {
      "id": "2e2ee9c7-33b1-41df-ba25-17e84bc1eed3",
      "title": "Fortnite",
      "bannerUrl": "https://i.ibb.co/GTxtFBN/fortnite.png",
      "_count": {
        "ads": 5
      }
    },
    {
      "id": "ff505e28-024f-400c-8509-e9aa1fd28bb8",
      "title": "World War Craft",
      "bannerUrl": "https://i.ibb.co/bFcnQZN/world-warcraft.png",
      "_count": {
        "ads": 0
      }
    }
  ]
  const navigation = useNavigation()
  function goToScreenGame (data: GameParam) {
    navigation.navigate('game', data)
  }
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
          contentContainerStyle={styles.containerList}
          />
      </SafeAreaView>
    </Background>
  )
}
