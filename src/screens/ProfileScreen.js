import React from 'react';
import {StyleSheet, View, Text, Button, Image, Pressable} from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';

export const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={styles.body}>
      <Text style={[GlobalStyles.CustomFont, styles.textSmall]}>
        This is Jane's profile. Her age is 23
      </Text>
      <Image style={styles.image} source={require('../../assets/icon1.png')} />
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#0f0' : '#f23f55',
            margin: 30,
            padding: 10,
          },
          GlobalStyles.ButtonText,
        ]}
        onPress={() => navigation.navigate('Profile2')}>
        <Text style={[GlobalStyles.ButtonText, styles.textSmall]}>
          Go to Janes Friends.
        </Text>
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
