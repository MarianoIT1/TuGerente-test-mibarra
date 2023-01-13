import { StyleSheet, Text, View, Platform, StatusBar, Dimensions } from 'react-native'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import {useEffect, useState} from 'react'

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55 + StatusBar.currentHeight 
const MAX_HEIGHT = 300
const screenWidth = Dimensions.get('window').width;


const Post = ({ route, navigation }) => {

  const { post } = route.params
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    navigation.setOptions({
      title: post.title
    })
  },[])

  const handleScroll = (e) => {
    const { y } = e.nativeEvent.contentOffset;
    setOpacity((y - StatusBar.currentHeight *2) / 200 - .95)
    navigation.setOptions({
      headerTitleStyle: {color: `rgba(255, 255, 255, ${opacity})`}
    })
  }

  const handleTop = (e) => {
    setOpacity(0)
    navigation.setOptions({
      headerTitleStyle: {color: `rgba(255, 255, 255, ${opacity})`}
    })
  }
  
  return (
    <View style={styles.screen} >
      <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'} />
      <ImageHeaderScrollView
       showsVerticalScrollIndicator ={false}
        style={{width: screenWidth}}
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.5}
        minOverlayOpacity={0}
        headerImage={{uri: post.image}}
        onScroll={handleScroll}
        onDisplay={handleTop}
      >
        <TriggeringView style={{width: screenWidth, padding: 16}} >
          <View>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.body}>{post.body.repeat(40)}</Text>
          </View>
        </TriggeringView>

      </ImageHeaderScrollView>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  screen: { 
    width: screenWidth,
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  title: {
    fontSize: 40,
    marginBottom: 24
  },
  body: {
    borderTopColor: '#ccc',
    borderTopWidth: .5,
    paddingTop: 24
  }
})