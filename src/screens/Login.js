import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, TextInput, Alert} from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';
import CustomButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = ({navigation}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  });

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value != null) {
          navigation.navigate('Home');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length === 0) {
      Alert.alert('Warning!', "Name can't be left empty");
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image style={styles.image} source={require('../../assets/sync.png')} />
      <Text style={[GlobalStyles.CustomFont, styles.headingText]}>
        Login Page
      </Text>
      <TextInput
        style={GlobalStyles.TextInput}
        placeholder="Enter Your Name"
        onChangeText={value => setName(value)}
      />
      <CustomButton onPressFunction={setData} title={'Login'} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#707172',
  },
  headingText: {
    fontSize: 40,
    padding: 10,
    color: '#111111',
  },
  image: {
    margin: 20,
    width: 100,
    height: 100,
  },
});
