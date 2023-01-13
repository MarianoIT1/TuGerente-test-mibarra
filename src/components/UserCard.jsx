import { Keyboard, StyleSheet, Text, TouchableNativeFeedback, View, Vibration } from 'react-native'
import Highlighter from '@sanar/react-native-highlight-text';
import { avatarColors } from '../constants';

const UserCard = ({user, search , navigation}) => {

  const initial = user.name[0].toString().toUpperCase()

  const handlePress = () => {
    Keyboard.dismiss()
    Vibration.vibrate(4)
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
