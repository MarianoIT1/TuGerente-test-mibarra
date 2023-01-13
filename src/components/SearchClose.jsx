import { StyleSheet, Text, View, StatusBar, TouchableHighlight } from 'react-native'
import { useSelector } from 'react-redux'
import IconF from 'react-native-vector-icons/Feather'


const SearchClose = ({ setSearchIsOpen }) => {

  const users = useSelector(state => state.users)

  return (
    <View style={styles.screen}>
    <StatusBar barStyle={'light-content'} backgroundColor={'#121212'} translucent={false} />
      <View style={styles.logoWrapper}>
        <Text style={styles.logoHead}>Native Test</Text>
        <Text style={styles.logoSub}>by MARIANO IBARRA</Text>
      </View>

      <View style={{borderRadius: 8, overflow: 'hidden', width: '90%'}}>
        <TouchableHighlight onPress={() => setSearchIsOpen(true)}
        >
          <View style={styles.searchBarOpener}>
            <IconF style={styles.icon} name={'search'} color={"#999"} size={16} />
            <Text style={styles.searchBarOpenerText}>
              {users.data && users.data.length > 0 ? 'Enter a email' : 'Loading..'}
            </Text>
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
    justifyContent: 'center',
    backgroundColor: '#121212'
  },
  searchBarOpener: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 36,
    backgroundColor: '#444',
  },
  searchBarOpenerText: {
    fontFamily: 'Lato-Regular',
    width: '100%',
    height: '100%',
    textAlignVertical: 'center',
    marginLeft: 12,
    color: '#999'
  },
  logoHead: {
    fontFamily: 'Lato-Black',
    textAlign: 'center',
    fontSize: 42,
    color: '#fff',
  },
  logoSub: {
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
    letterSpacing: .8,
    fontSize: 13,
    color: '#3cffd0',
    marginTop: 4
  },
  logoWrapper: {
    marginTop: -80,
    marginBottom: 30
  }
})

export default SearchClose