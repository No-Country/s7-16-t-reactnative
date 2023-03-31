import React, {useState} from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export const TestStep2 = ({navigation}: any) => {

  const onPressGoNext = () => {    
    navigation.navigate('TestStep3Name')
  }

  return (
    <View style={styles.viewBase}>
      <Text>Content Base Header</Text>
      <View style={styles.view}>
        <Text> View </Text>
      </View>
      <Button
        onPress={onPressGoNext}
        title="Siguiente"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>Saltar Presentacion</Text>
      <Text>Content Base Footer</Text>
    </View>    
  )
}
const styles = StyleSheet.create({
  viewBase: { backgroundColor: 'yellow', 
              flex: 1, 
              justifyContent: 'center', 
              alignItems: 'center'
            },
  view: { backgroundColor: 'red', width: 200, height: 200}, 
})

