import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos, getPosts, getUsers, searchUser } from '../redux/actions'

const Home = ({ navigation }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
    // dispatch(getPosts())
    // dispatch(getPhotos())
  }, [])

  const [input, setInput] = useState('')
  const searchResults = useSelector(state => state.searchResults)
  const users = useSelector(state => state.users)

  const submitHandler = () => {
    dispatch(searchUser(input.toLowerCase()))
    setInput('')
  }

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        blurOnSubmit={true}
        placeholder={users.data.length > 0 ? 'Enter a email' : 'Loading..'}
        onSubmitEditing={submitHandler}
      />
      <View style={{width: '100%'}}>
        {
          searchResults.length > 0 && 
          searchResults.map(elem => 
            <TouchableOpacity 
              onPress={() => navigation.navigate('User', {id: elem.id})}
              style={styles.userCard} 
              key={elem.id}>
              <Text>{elem.name}</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  input: {
    backgroundColor: 'white',
    width:'90%',
    padding: 10,
    borderRadius: 8,
  },
  userCard: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  userCardText: {
    textAlign: 'left',
    width: '100%'
  }
})