import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorScreen = ({errorMsg}) => {
  return (
    <View style={styles.screen}>
      <Text>{`Error: ${errorMsg}`}</Text>
    </View>
  )
}

export default ErrorScreen

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#121212'
  }
})