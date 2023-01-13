import { Keyboard, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import Highlighter from '@sanar/react-native-highlight-text';

const UserCard = ({user, search , navigation}) => {

  const initial = user.name[0].toString().toUpperCase()

  const avatarColors = [
    {
        "letter": "A",
        "color": "#DB4437"
    },
    {
        "letter": "B",
        "color": "#E91E63"
    },
    {
        "letter": "C",
        "color": "#9C27B0"
    },
    {
        "letter": "D",
        "color": "#673AB7"
    },
    {
        "letter": "E",
        "color": "#3F51B5"
    },
    {
        "letter": "F",
        "color": "#4285F4"
    },
    {
        "letter": "G",
        "color": "#039BE5"
    },
    {
        "letter": "H",
        "color": "#0097A7"
    },
    {
        "letter": "I",
        "color": "#009688"
    },
    {
        "letter": "J",
        "color": "#0F9D58"
    },
    {
        "letter": "K",
        "color": "#689F38"
    },
    {
        "letter": "L",
        "color": "#EF6C00"
    },
    {
        "letter": "M",
        "color": "#FF5722"
    },
    {
        "letter": "N",
        "color": "#757575"
    },
    {
        "letter": "O",
        "color": "#DB4437"
    },
    {
        "letter": "P",
        "color": "#E91E63"
    },
    {
        "letter": "Q",
        "color": "#9C27B0"
    },
    {
        "letter": "R",
        "color": "#673AB7"
    },
    {
        "letter": "S",
        "color": "#3F51B5"
    },
    {
        "letter": "T",
        "color": "#4285F4"
    },
    {
        "letter": "U",
        "color": "#039BE5"
    },
    {
        "letter": "V",
        "color": "#0097A7"
    },
    {
        "letter": "W",
        "color": "#009688"
    },
    {
        "letter": "X",
        "color": "#0F9D58"
    },
    {
        "letter": "Y",
        "color": "#689F38"
    },
    {
        "letter": "Z",
        "color": "#EF6C00"
    }
]
  
  const handlePress = () => {
    Keyboard.dismiss()
    navigation.navigate('User', {id: user.id})
  }
  
  return (
    <TouchableNativeFeedback
      onPress={handlePress}
      background={
        Platform.OS === 'android'
          ? TouchableNativeFeedback.Ripple('#03dac514')
          : undefined
      }
    >
      <View style={styles.cardWrapper}>
        <View style={{...styles.avatar, backgroundColor: avatarColors.find(a => a.letter === initial).color}}>
          <Text style={styles.initial}>{initial}</Text>
        </View>
        <View style={styles.textsWrapper}>
          <Text style={styles.name}>{user.name}</Text>
          <Highlighter 
            style={styles.email}
            highlightStyle={styles.accentEmail}
            searchWords={[search]}
            textToHighlight={user.email}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default UserCard

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    width: '100%',
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderBottomColor: '#ccc',
    borderBottomWidth: .5
  },
  avatar: {
    borderRadius: 50,
    width: 48,
    height: 48,
    backgroundColor: 'violet',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initial: {
    fontSize: 22,
    color: '#ffffffc9',
    fontFamily: 'Lato-Regular'
  },
  textsWrapper: {
    marginLeft: 16,
    marginBottom: 4
  },
  name: {
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    color: '#eee'
  },
  email: {
    fontSize: 13,
    color: '#555',
    marginTop: 3,
    fontFamily: 'Lato-Regular',
    color: '#aaa'
  },
  accentEmail:{
    color: '#3cffd0'
  }
})
