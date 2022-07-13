import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, TextInput, Alert} from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';
import CustomButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setName, setAge} from '../redux/actions';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => {
    console.error(error);
  },
);

export const Login = ({navigation}) => {
  const {name, age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  //   const [name, setName] = useState('');
  //   const [age, setAge] = useState('');

  useEffect(() => {
    createTable();
    getData();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER)',
      );
    });
  };

  const getData = () => {
    try {
      //   AsyncStorage.getItem('UserData').then(value => {
      //     if (value != null) {
      //       navigation.navigate('Home');
      //     }
      //   });
      console.log('getdata called');
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          if (results.rows.length > 0) {
            var userName = results.rows.item(0).Name;
            var userAge = results.rows.item(0).Age;
            console.log('Login: ' + userName, userAge);
            navigation.navigate('Home');
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length === 0 || age.length === 0) {
      Alert.alert('Warning!', "Name can't be left empty");
    } else {
      try {
        dispatch(setName(name));
        dispatch(setAge(age));
        console.log('Set Data: ' + name, age);
        // var user = {Name: name, Age: age};
        // await AsyncStorage.setItem('UserData', JSON.stringify(user));
        await db.transaction(async tx => {
          await tx.executeSql('INSERT INTO Users (Name, Age) VALUES (?,?)', [
            name,
            age,
          ]);
        });
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
        onChangeText={value => dispatch(setName(value))}
      />
      <TextInput
        style={GlobalStyles.TextInput}
        placeholder="Enter Your Age"
        onChangeText={value => dispatch(setAge(value))}
        keyboardType="phone-pad"
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
    marginBottom: 100,
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
