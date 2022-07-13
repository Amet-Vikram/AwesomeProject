import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const YoloButton = props => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      android_ripple={{color: '#efbbbb'}}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#bc3124' : '#dd4242'},
        styles.button,
      ]}>
      <Text style={styles.headingText}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    padding: 10,
    color: '#111111',
    fontFamily: 'Heebo-VariableFont_wght',
  },
  button: {
    margin: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
  },
});

export default YoloButton;
