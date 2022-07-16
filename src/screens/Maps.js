import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView from 'react-native-maps';

export const Map = ({route}) => {
  const {city, country, latitude, longitude} = route.params;

  return (
    <View style={styles.body}>
      <Text style={styles.textSmall}>{country}</Text>
      <Text style={styles.textSmall}>{city}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: parseInt(latitude),
          longitude: parseInt(longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
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
  map: {
    flex: 1,
    margin: 10,
    width: '100%',
    height: '100%',
  },
});
