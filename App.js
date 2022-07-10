import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './Home';
import {ProfileScreen} from './ProfileScreen';
import {ProfileScreen2} from './ProfileScreen2';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'anchor';
              size = focused ? 25 : 20;
              color = focused ? '#2f4333' : '#f0113350';
            } else if (route.name === 'Profile') {
              iconName = 'bacteria';
              size = focused ? 25 : 20;
              color = focused ? '#2f4333' : '#f0113350';
            } else if (route.name === 'Profile2') {
              iconName = 'camera';
              size = focused ? 25 : 20;
              color = focused ? '#2f4333' : '#f0113350';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {height: 60},
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{header: () => null}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{header: () => null}}
        />
        <Tab.Screen
          name="Profile2"
          component={ProfileScreen2}
          options={{header: () => null}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
