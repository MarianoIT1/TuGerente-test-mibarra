import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import api from '../api'
import ErrorScreen from '../components/ErrorScreen'
import LoadingScreen from '../components/LoadingScreen'
import PostCard from '../components/PostCard'

const User = ({ route, navigation }) => {

  const { id } = route.params
  const [posts, setPosts] = useState({data: [], loading: true, error: false})
  const user = useSelector(state => state.users).data.filter(user => user.id === id)[0]

  useEffect(() => {
    api.fetchPosts(id)
      .then(data => setPosts({data, loading: false, error: false}))
      .catch(err => setPosts({...posts, loading: false, error: err.message}))
  }, [])

  useEffect(() => {
    navigation.setOptions({
      title: user.name
    })
  })

  if(posts.loading) return <LoadingScreen />
  if(posts.error) return <ErrorScreen errorMsg={posts.error} />

  return (
    <View style={styles.screen}>
      <FlatList
        data={posts.data}
        ListHeaderComponent={
          <Text style={styles.subtitle}>POSTS </Text>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.empty}> Nothing yet.. </Text>
          </View>
        }
        renderItem={({item}) =>
          <PostCard navigation={navigation} post={item}/> 
        }
      />
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#121212'
  },
  subtitle: {
    textAlign: 'left',
    paddingLeft: 14,
    marginTop: 14,
    marginBottom: 6,
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: '#3cffd0cc'
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