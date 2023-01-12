import { StyleSheet, Text, View, Button } from 'react-native'

const User = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>User details screen</Text>
      <Button
        title="Go to Post"
        onPress={() => navigation.navigate('Post')}
      />
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' }
})