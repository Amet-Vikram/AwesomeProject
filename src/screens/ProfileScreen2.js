import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Image, Pressable} from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';

export const ProfileScreen2 = ({navigation, route}) => {
  // const [name, setName] = useState('')
  // const [age, setAge] = useState('')
  const {name, age} = route.params;
  // console.log(route.params);
  return (
    <View style={styles.body}>
      <Text style={[styles.textSmall]}>
        {name} has no friends. lmao. Your age is {age}.
      </Text>
      <Text style={[styles.textSmall, GlobalStyles.CustomFont]}>
        Image fetched from Web:
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
    margin: 20,
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
