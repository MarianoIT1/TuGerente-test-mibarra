import { Provider } from 'react-redux';
import store from './src/redux/store'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/Home';
import User from './src/views/User';
import Post from './src/views/Post';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Post" component={Post} options={{
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerTintColor: '#fff',
            headerTitleStyle:{color: '#fff0'}
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

