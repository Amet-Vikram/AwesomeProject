import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Pressable,
  Alert,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../utils/GlobalStyles';
import CustomButton from '../utils/CustomButton';

export const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value != null) {
          setName(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length === 0) {
      Alert.alert('Warning!', "Name can't be left empty");
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        Alert.alert('Success!', 'Updated Successfully!!');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.textSmall}>Welcome {name} !</Text>
      <TextInput
        style={GlobalStyles.TextInput}
        placeholder={'Enter Name'}
        value={name}
        onChangeText={value => setName(value)}
      />
      <CustomButton onPressFunction={updateData} title={'Update'} />
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#0f0' : '#dddd',
            margin: 30,
            padding: 10,
          },
        ]}
        onPress={() =>
          navigation.navigate('Profile2', {name: [{name}], age: '20'})
        }>
        <Text style={styles.textSmall}>Go to {name}'s friends.</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textSmall: {
    margin: 20,
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
