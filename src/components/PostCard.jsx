import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const PostCard = ({post, navigation}) => {
  return (
    <TouchableNativeFeedback 
      over
      onPress={() => navigation.navigate('Post', {post})}
      background={
        Platform.OS === 'android'
          ? TouchableNativeFeedback.Ripple('#03dac519')
          : undefined
      }
    >
      <View style={styles.cardWrapper} key={post.id}>
          <Image style={styles.image} resizeMode='cover' source={{uri: post.thumbnail}} />
          <View style={styles.titleWrapper}>
            <Text numberOfLines={2} style={styles.title}>{post.title}</Text>
          </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default PostCard

const styles = StyleSheet.create({
  cardWrapper: {
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#242424',
    marginHorizontal: '1%',
    width: '98%',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 1,
    marginVertical: 6
  },
  image: {
    width: 100,
    height: '100%',
  },
  titleWrapper: {
    width: screenWidth * 0.95 - 100,
    justifyContent: 'center',
    paddingHorizontal: '5%'
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 17,
    color: '#eee'
  }
})