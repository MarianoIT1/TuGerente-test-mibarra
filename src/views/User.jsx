import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import api from '../api'
import PostCard from '../components/PostCard'
import MasonryList from '@react-native-seoul/masonry-list';

const User = ({ route, navigation }) => {

  const { id } = route.params
  const [posts, setPosts] = useState({data: [], loading: true, error: false})
  const user = useSelector(state => state.users).data.filter(user => user.id === id)[0]

  useEffect(() => {
    api.newFetchPost(id)
      .then(data => setPosts({data, loading: false, error: false}))
      .catch(err => setPosts({...posts, loading: false, error: err.message}))
  }, [])

  useEffect(() => {
    navigation.setOptions({
      title: user.name
    })
  })


  if(posts.loading) return <Text>Loading..</Text>
  if(posts.error) return <Text>{`Error: ${posts.error}`}</Text>

  return (
    <View style={styles.screen}>
      
      <MasonryList 
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle = {{padding: '2%', width: '100%'}}
        numColumns={2}
        data={posts.data}
        ListHeaderComponent={<Text style={styles.subtitle}>POSTS </Text>}
        ListEmptyComponent={<View style={styles.emptyContainer}><Text style={styles.empty}> Nothing yet.. </Text></View>}
        renderItem={({item}) => <PostCard navigation={navigation} post={item}/> }
      />
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  subtitle: {
    textAlign: 'left',
    paddingLeft: 14,
    marginTop: 16,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60
  },
  empty: {
    textAlign: 'center'
  }
  
})