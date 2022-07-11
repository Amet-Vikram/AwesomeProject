import React from 'react';
import {StyleSheet, View, Text, Button, Image, Pressable} from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';

export const ProfileScreen2 = ({navigation, route}) => {
  console.log('Hello');
  return (
    <View style={styles.body}>
      <Text style={[styles.textSmall, GlobalStyles.ButtonText]}>
        Jane has no friends. lmao.
      </Text>
      <Text style={[styles.textSmall]}>This is Dummy Text</Text>
      <Image
        style={styles.image}
        source={{uri: 'https://en.pimg.jp/049/231/907/1/49231907.jpg'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textSmall: {
    fontFamily: 'BebasNeue-Regular',
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
