import { useRoute } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, Modal, SafeAreaView, View } from 'react-native'
import { GameParam } from '../../@types/navigation'

import { Background } from '../../components/Background'
import { DuoCard } from '../../components/DuoCard'
import { Header } from '../../components/Header'
import { Heading } from '../../components/Heading'
import { styles } from './styles'

export function Game () {
  const router = useRoute()
  const { bannerUrl, id, title } = router.params as GameParam
  const ads = [
    {
      "id": "6c873cd0-ebd4-4cca-9f0b-b8e7e3b370bc",
      "name": "retrowm",
      "hoursEnd": "04:09",
      "hoursStart": "01:04",
      "useVoiceChannel": true,
      "weekDays": [
        0,
        1
      ],
      "yearsPlaying": 0
    },
    {
      "id": "fa950fd0-be6f-4325-9506-fe07aa9dd13f",
      "name": "retrowm",
      "hoursEnd": "04:09",
      "hoursStart": "01:04",
      "useVoiceChannel": true,
      "weekDays": [
        0,
        1
      ],
      "yearsPlaying": 0
    },
    {
      "id": "4c5750ab-e6db-4a39-9856-df5aebf28726",
      "name": "retrowm",
      "hoursEnd": "04:09",
      "hoursStart": "01:04",
      "useVoiceChannel": true,
      "weekDays": [
        0,
        1
      ],
      "yearsPlaying": 0
    },
    {
      "id": "57f8a016-a25a-47a1-8379-05d698614966",
      "name": "retrowm",
      "hoursEnd": "04:09",
      "hoursStart": "01:04",
      "useVoiceChannel": true,
      "weekDays": [
        0,
        1
      ],
      "yearsPlaying": 0
    },
    {
      "id": "266919c7-e9f8-4db2-be1b-69aaa271d378",
      "name": "retrowm",
      "hoursEnd": "04:09",
      "hoursStart": "01:04",
      "useVoiceChannel": true,
      "weekDays": [
        0,
        1
      ],
      "yearsPlaying": 0
    },
    {
      "id": "3009f254-bf75-43c7-a566-ccdb4961a425",
      "name": "retrowm",
      "hoursEnd": "04:09",
      "hoursStart": "01:04",
      "useVoiceChannel": true,
      "weekDays": [
        0,
        1
      ],
      "yearsPlaying": 0
    },
    {
      "id": "ce934ced-dc73-4921-9b01-c75d049464da",
      "name": "asdd",
      "hoursEnd": "04:09",
      "hoursStart": "01:04",
      "useVoiceChannel": true,
      "weekDays": [
        0,
        1
      ],
      "yearsPlaying": 0
    },
    {
      "id": "41de1a6e-6752-4d0d-ac3a-22f4ca3b1537",
      "name": "asdd",
      "hoursEnd": "04:09",
      "hoursStart": "01:04",
      "useVoiceChannel": true,
      "weekDays": [
        0,
        1
      ],
      "yearsPlaying": 0
    },
    {
      "id": "65d5086c-66b5-413e-a53c-c774faba7d6c",
      "name": "asdd",
      "hoursEnd": "04:09",
      "hoursStart": "01:04",
      "useVoiceChannel": true,
      "weekDays": [
        0,
        1
      ],
      "yearsPlaying": 0
    },
    {
      "id": "5532a15a-0de0-4f80-a6ef-28cd3c67675f",
      "name": "asdd",
      "hoursEnd": "04:09",
      "hoursStart": "01:04",
      "useVoiceChannel": true,
      "weekDays": [
        0,
        1
      ],
      "yearsPlaying": 0
    },
    {
      "id": "b9b70674-6db7-41fa-b968-79080b2418d4",
      "name": "kaisen",
      "hoursEnd": "11:59",
      "hoursStart": "04:01",
      "useVoiceChannel": true,
      "weekDays": [
        3,
        5,
        1
      ],
      "yearsPlaying": 8
    },
    {
      "id": "b8c2f42e-f212-4b3c-8a28-bc0f51ec24e5",
      "name": "kaisen",
      "hoursEnd": "11:59",
      "hoursStart": "04:01",
      "useVoiceChannel": true,
      "weekDays": [
        3,
        5,
        1
      ],
      "yearsPlaying": 8
    },
    {
      "id": "81d44491-5771-4e89-abd4-e01bdd827476",
      "name": "Has Been Hacked",
      "hoursEnd": "17:40",
      "hoursStart": "14:00",
      "useVoiceChannel": true,
      "weekDays": [
        0,
        6
      ],
      "yearsPlaying": 5
    }
  ]
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
            <DuoCard />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
          contentContainerStyle={styles.contentList} />
      </SafeAreaView>
    </Background>
  )
}