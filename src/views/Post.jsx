import { StyleSheet, Text, View } from 'react-native'

const Post = () => {
  return (
    <View style={styles.screen}>
      <Text>Post screen</Text>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' }
})