import { ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native'
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

    return (
      <View style={{...styles.screen}}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#121212'} translucent={false} />
        <View style={styles.barWrapper}>
          <TouchableOpacity style={styles.iconCont} onPress={() => setSearchIsOpen(false)}>
            <Icon style={styles.icon} name={"arrow-back"} color={"#fff"} size={23}/>
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
              placeholderTextColor="#999" 
            />
          </View>
        </View>
        { 
          searchInput.length > 0
            ? searchResults.length > 0
              ? <View style={{flex: 1, width: '100%', height: '100%'}}> 
                  <Text style={styles.count}>{`${searchResults.length} ${searchResults.length === 1 ? 'result' : 'results'}`}</Text>
                  <ScrollView keyboardShouldPersistTaps={'always'} style={{width: '100%', height: '100%'}}>
                    {searchResults.map(elem => 
                      <UserCard key={elem.id} user={elem} search={searchInput} navigation={navigation} />
                    )}
                  </ScrollView>
                </View>
              : <View style={styles.noResults}>
                  <Text style={styles.msg}>No results :(</Text>
                </View>
            : <View style={styles.noResults}>
                <Text style={styles.msg}>Try searching for users by email..</Text>
              </View>
          }
      </View>
    )
  }

export default SearchOpen

const styles = StyleSheet.create({
    screen: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#121212'
      },
      noResults: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        borderBottomColor: '#ccc',
        borderBottomWidth: .5
      },
      barWrapper: {
        flexDirection: 'row',
        height: 55,
        width: '90%',
        borderBottomColor: '#444',
        borderBottomWidth: 1,
        marginBottom: 6,
        alignItems: 'center'
      },
      searchBar: {
        flex: 1,
        flexDirection: 'row',
        height: 36,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#444',
        borderRadius: 8,
        fontFamily: 'Montserrat-Medium'
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
        marginLeft: 12,
        color: '#eee',
        fontFamily: 'Lato-Regular'
      },
      msg: {
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        width: '100%',
        color: '#aaa',
        marginBottom: 28
      },
      count: {
        width: '100%',
        textAlign: 'right',
        paddingRight: '5%',
        marginBottom: 6, 
        fontFamily: 'Lato-Regular',
        color: '#3cffd0cc',
        lineHeight: 24,
        fontSize: 13,

      }
})