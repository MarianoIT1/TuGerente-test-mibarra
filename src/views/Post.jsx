import { StyleSheet, Text, View, Image } from 'react-native'

const Post = ({ route, navigation }) => {

  const { post } = route.params

  return (
    <View style={styles.screen}>
      <Image style={styles.image} resizeMode='cover' source={{uri: post.image}} />
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start' 
  },
  image: {
    width: '100%',
    height: 150
  }
})