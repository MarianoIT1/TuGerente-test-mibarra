import axios from 'axios'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { useSelector } from 'react-redux'
import api from '../api'

const User = ({ route, navigation }) => {

  const { id } = route.params
  const [posts, setPosts] = useState({data: [], loading: true, error: false})
  const user = useSelector(state => state.users).data.filter(user => user.id === id)[0]

  useEffect(() => {
    api.newFetchPost(id)
      .then(data => setPosts({data, loading: false, error: false}))
      .catch(err => setPosts({...posts, loading: false, error: err.message}))
  }, [])

  if(posts.loading) return <Text>Loading..</Text>
  if(posts.error) return <Text>{`Error: ${posts.error}`}</Text>

  return (
    <View style={styles.screen}>
      <Text>{`Name: ${user.name}`}</Text>
      <View>
        {
          
          posts.data && posts.data.map(post => 
           { console.log(post.image);
            return (<View key={post.id}>
              <Image style={styles.image} resizeMode='cover' source={{uri: post.image}} />
              <Text>{`Title: ${post.title}`}</Text>
            </View>)}
          )
        }
      </View>

    </View>
  )
}

export default User

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' },
  image: {
    width: 50,
    height: 50
  }
})