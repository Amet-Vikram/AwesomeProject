import React from 'react';
import {StyleSheet, View, Text, Button, Image, Pressable} from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';

export const ProfileScreen2 = ({navigation, route}) => {
  const {name, age} = route.params;
  console.log('Hello');
  return (
    <View style={styles.body}>
      <Text style={[styles.textSmall, GlobalStyles.CustomFont]}>
        {JSON.parse(name)} has no friends. lmao. You are years old.
      </Text>
      <Text style={[styles.textSmall, GlobalStyles.CustomFont]}>
        This is Dummy Text
      </Text>
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
