import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/Home.js';
import {Login} from './screens/Login.js';
import {ProfileScreen2} from './screens/ProfileScreen2.js';
import GlobalStyles from './utils/GlobalStyles.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#eeb23f',
          },
          headerTintColor: '#ffffff',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
