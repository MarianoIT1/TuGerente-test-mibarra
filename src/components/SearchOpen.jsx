import { ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler'
import UserCard from './UserCard'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconF from 'react-native-vector-icons/Feather'

import { searchUser } from '../redux/actions'

const SearchOpen = ({setSearchIsOpen, navigation}) => {

    const dispatch = useDispatch()
    const searchResults = useSelector(state => state.searchResults)
    const users = useSelector(state => state.users)
    const [searchInput, setSearchInput] = useState('')

    const handleChanges = (value) => {
      setSearchInput(value)
      dispatch(searchUser(value.toLowerCase()))
    }

    useEffect(() => {
      StatusBar.setTranslucent(false)
      StatusBar.setBarStyle('dark-content')
    }, [navigation])

    return (
      <View style={{...styles.screen}}>
        <StatusBar barStyle={'dark-content'} translucent={false} />
        <View style={styles.barWrapper}>
          <TouchableOpacity style={styles.iconCont} onPress={() => setSearchIsOpen(false)}>
            <Icon style={styles.icon} name={"arrow-back"} color={"#000"} size={23}/>
          </TouchableOpacity>
          <View style={styles.searchBar}>
            <IconF style={styles.icon} name={'search'} color={"#888"} size={16} />
            <TextInput
              style={styles.input}
              value={searchInput}
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
        </View>
        <ScrollView  style={{width: '100%', height: '100%'}}>
          {
            searchResults.length > 0 && 
            searchResults.map(elem => 
              <UserCard key={elem.id} user={elem} search={searchInput} navigation={navigation} />
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
        justifyContent: 'center',
        width: '100%' 
      },
      barWrapper: {
        flexDirection: 'row',
        height: 55,
        width: '90%',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginBottom: 12,
        alignItems: 'center'
      },
      searchBar: {
        flex: 1,
        flexDirection: 'row',
        height: 36,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 8
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
      iconCont: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: 'auto',
        marginRight: 12,
        height: 55,
      },
      input: {
        marginLeft: 12
      }
})