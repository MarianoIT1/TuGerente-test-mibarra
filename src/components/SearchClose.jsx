import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

const SearchClose = ({ setSearchIsOpen }) => {

  const users = useSelector(state => state.users)

  return (
    <View style={styles.screen}>
      <TouchableOpacity 
        style={styles.searchBarOpener}
        onPress={() => setSearchIsOpen(true)}
        >
        <Text style={styles.searchBarOpenerText}>{users.data && users.data.length > 0 ? 'Enter a email' : 'Loading..'}</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    width: '90%',
    height: 40,
    borderRadius: 50,
    backgroundColor: '#CCC',
    paddingHorizontal: 12
  },
  searchBarOpenerText: {
    width: '100%',
    height: '100%',
    textAlignVertical: 'center'
  }
})

export default SearchClose