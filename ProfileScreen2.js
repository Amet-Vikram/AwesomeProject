import React from 'react';
import {StyleSheet, View, Text, Button, Image, Pressable} from 'react-native';

export const ProfileScreen2 = ({navigation, route}) => {
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
