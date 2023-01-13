import { Provider } from 'react-redux';
import store from './src/redux/store'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/Home';
import User from './src/views/User';
import Post from './src/views/Post';
import {useFonts} from 'expo-font'

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Merriweather-Regular': require('./assets/fonts/Merriweather-Regular.ttf'),
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen 
            name="User"
            component={User} 
            options={{
              headerTitleStyle: {
                fontFamily: 'Lato-Bold',
                color: '#eee'
              },
              headerStyle: {
                backgroundColor: '#282828',
              },
              headerTintColor: '#eee'
            }}
          />                                     
          <Stack.Screen name="Post" component={Post} options={{
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerTintColor: '#fff',
            headerTitleStyle:{color: '#fff0', fontFamily: 'Lato-Black'}
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

