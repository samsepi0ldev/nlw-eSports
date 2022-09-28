import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black } from '@expo-google-fonts/inter'
  
import { Background } from './src/components/Background'
import { Routes } from './src/routes'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  if (!fontsLoaded) return null
  return (
    <Background>
      <Routes />
      <StatusBar
        backgroundColor='transparent'
        style='light'
        translucent />
    </Background>
  );
}
