import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const PostCard = ({post, navigation}) => {
  return (
    <TouchableNativeFeedback 
      onPress={() => navigation.navigate('Post', {post})}
      background={
        Platform.OS === 'android'
          ? TouchableNativeFeedback.SelectableBackground()
          : undefined
      }
    >
      <View style={styles.cardWrapper} key={post.id}>
          <Image style={styles.image} resizeMode='cover' source={{uri: post.thumbnail}} />
          <View style={styles.footer}>
            <Text style={styles.title}>{post.title}</Text>
          </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default PostCard

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#fcfcfc',
    width: '92%',
    margin: '4%',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 1
  },
  image: {
    width: '100%',
    height: 100
  },
  footer: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 14
  },
  title: {
    textTransform: 'capitalize',
    fontSize: 16
  }
})