import React from 'react';
import {StyleSheet, View, Text, Button, Image, Pressable} from 'react-native';

export const ProfileScreen = ({navigation, route}) => {
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
