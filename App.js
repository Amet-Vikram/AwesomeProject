import React from 'react';
import {StyleSheet, View, Text, Button, Image, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane', age: '20'})
        }
      />
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#0f0' : 'white',
            margin: 30,
            padding: 10,
          },
        ]}
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane', age: '20'})
        }>
        <Text style={styles.textSmall}>Go to Jane's profile.</Text>
      </Pressable>
    </View>
  );
};

const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.textSmall}>
        This is {route.params.name}'s profile. Her age is {route.params.age}
      </Text>
      <Image
        style={styles.image}
        source={require('./assets/icons8-whatsapp-250.png')}
      />
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#0f0' : 'white',
            margin: 30,
            padding: 10,
          },
        ]}
        onPress={() => navigation.navigate('Profile Friends')}>
        <Text style={styles.textSmall}>Go to Janes Friends.</Text>
      </Pressable>
    </View>
  );
};

const ProfileScreen2 = ({navigation, route}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.textSmall}>Jane has no friends. lmao.</Text>
      <Image
        style={styles.image}
        source={{uri: 'https://en.pimg.jp/049/231/907/1/49231907.jpg'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textSmall: {
    color: '#111111',
    fontSize: 24,
  },
  image: {
    width: 300,
    height: 300,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
