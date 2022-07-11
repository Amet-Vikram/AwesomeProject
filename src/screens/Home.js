import React from 'react';
import {StyleSheet, View, Text, Button, Image, Pressable} from 'react-native';

export const HomeScreen = ({navigation}) => {
  console.log('Hello2');
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

const styles = StyleSheet.create({
  textSmall: {
    fontFamily: 'Lora-VariableFont_wght',
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
