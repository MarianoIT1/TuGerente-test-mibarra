import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler'
import UserCard from './UserCard'
import StatusBar from '../components/StatusBar'
import { searchUser } from '../redux/actions'

const SearchOpen = ({setSearchIsOpen, navigation}) => {

    const dispatch = useDispatch()
    const searchResults = useSelector(state => state.searchResults)
    const users = useSelector(state => state.users)

    const handleChanges = (value) => {
      dispatch(searchUser(value.toLowerCase()))
    }

    return (
      <View style={{...styles.screen, justifyContent: 'flex-start'}}>
        <StatusBar  backgroundColor="#2EBD6B" barStyle="light-content" />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => setSearchIsOpen(false)}>
            <Text>{'<'}</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            onChangeText={handleChanges}
            keyboardType='email-address'
            returnKeyType='search'
            autoFocus={true}
            autoCapitalize='none'
            autoCorrect={false}
            blurOnSubmit={true}
            placeholder={users.data.length > 0 ? 'Enter a email' : 'Loading..'}
          />
        </View>
        <ScrollView  style={{width: '100%', height: '100%'}}>
          {
            searchResults.length > 0 && 
            searchResults.map(elem => 
              <UserCard key={elem.id} name={elem.name} email={elem.email} id={elem.id} navigation={navigation} />
            )
          }
        </ScrollView>
      </View>
    )
  }


export default SearchOpen

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
      },
})