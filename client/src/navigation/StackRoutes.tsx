import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TestStep1 } from '../screens/TestStep1'
import { TestStep2 } from '../screens/TestStep2'
import { TestStep3 } from '../screens/TestStep3'
import { TestStep4 } from '../screens/TestStep4'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export const StackRoutes = () => {
  return (
    <NavigationContainer theme={DefaultTheme} >
      <Stack.Navigator>
        <Stack.Screen name="TestStep1Name" component={TestStep1} />
        <Stack.Screen name="TestStep2Name" component={TestStep2} />
        <Stack.Screen name="TestStep3Name" component={TestStep3} />
        <Stack.Screen name="TestStep4Name" component={TestStep4} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
