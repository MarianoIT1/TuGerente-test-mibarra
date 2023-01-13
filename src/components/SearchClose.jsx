import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import { useSelector } from 'react-redux'
import IconF from 'react-native-vector-icons/Feather'


const SearchClose = ({ setSearchIsOpen }) => {

  const users = useSelector(state => state.users)

  return (
    <View style={styles.screen}>

      <Text>
        MIBARRA TEST
      </Text>

      <View style={{borderRadius: 8, overflow: 'hidden', width: '90%'}}>
        <TouchableHighlight onPress={() => setSearchIsOpen(true)}
        >
          <View style={styles.searchBarOpener}>
            <IconF style={styles.icon} name={'search'} color={"#888"} size={16} />
            <Text style={styles.searchBarOpenerText}>{users.data && users.data.length > 0 ? 'Enter a email' : 'Loading..'}</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  searchBarOpener: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 36,
    backgroundColor: '#ddd'
  },
  searchBarOpenerText: {
    fontFamily: 'Lato-Regular',
    width: '100%',
    height: '100%',
    textAlignVertical: 'center',
    marginLeft: 12,
    color: '#666'
  }
})

export default SearchClose