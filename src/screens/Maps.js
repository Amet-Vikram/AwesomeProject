import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Map = ({route}) => {
  const {location} = route.params.country;

  return (
    <View style={styles.body}>
      <Text style={styles.textSmall}>Map</Text>
      <Text style={styles.textSmall}>Country is : {location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#4d7487',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSmall: {
    margin: 10,
    fontFamily: 'Lora-VariableFont_wght',
    color: '#ffffff',
    fontSize: 24,
  },
  body2: {
    margin: 10,
    backgroundColor: '#4d2387',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body3: {
    margin: 10,
    backgroundColor: '#4bbb87',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
