import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/Home.js';
import {Login} from './screens/Login.js';
import {Camera} from './screens/Camera.js';
import {Camera2} from './screens/Camera2.js';
import {ProfileScreen2} from './screens/ProfileScreen2.js';
import {Map} from './screens/Maps.js';
import GlobalStyles from './utils/GlobalStyles.js';
import {Provider} from 'react-redux';
import {Store} from './redux/store.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#a3c2d1',
            },
            headerTintColor: '#2a2d2e',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            // options={{header: () => null}}
          />
          <Stack.Screen
            name="Profile2"
            component={ProfileScreen2}
            // options={{header: () => null}}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            // options={{header: () => null}}
          />
          <Stack.Screen
            name="Camera"
            component={Camera}
            // options={{header: () => null}}
          />
          <Stack.Screen
            name="Camera2"
            component={Camera2}
            // options={{header: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
