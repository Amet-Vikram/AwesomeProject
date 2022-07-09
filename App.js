import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './Home';
import {ProfileScreen} from './ProfileScreen';
import {ProfileScreen2} from './ProfileScreen2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Application'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Profile Friends" component={ProfileScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
