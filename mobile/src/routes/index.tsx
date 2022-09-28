import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Game } from '../screen/Game'
import { Home } from '../screen/Home'

const Stack = createNativeStackNavigator()

export function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='game' component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
