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
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../utils/GlobalStyles';
import CustomButton from '../utils/CustomButton';
import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from 'react-redux';
import {
  setName,
  setAge,
  increaseAge,
  decreaseAge,
  getCities,
} from '../redux/actions.js';
import PushNotification from 'react-native-push-notification';

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

export const HomeScreen = ({navigation}) => {
  const {name, age, cities} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  // console.log(name, age);
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');

  useEffect(() => {
    getData();
    dispatch(getCities());
  }, []);

  const getData = () => {
    try {
      // console.log('Home:');
      // AsyncStorage.getItem('UserData').then(value => {
      //   if (value != null) {
      //     let user = JSON.parse(value);
      //     setName(user.Name);
      //     setAge(user.Age);
      //   }
      // });
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          if (results.rows.length > 0) {
            var userName = results.rows.item(0).Name;
            var userAge = results.rows.item(0).Age;
            console.log('Home getData: ' + userName, userAge);
            dispatch(setName(userName));
            dispatch(setAge(userAge));
          }
        });
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
        dispatch(setName(name));
        dispatch(setAge(age));
        //   var user = {
        //     Name: name,
        //   };
        //   await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        db.transaction(tx => {
          tx.executeSql(
            'UPDATE Users SET Name=?, Age=?',
            [name, age],
            () => {
              Alert.alert('Success!', 'Updated Successfully!!');
            },
            error => {
              console.log(error);
            },
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
    try {
      // await AsyncStorage.clear();
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM Users',
          [],
          () => {
            navigation.navigate('Login');
          },
          error => {
            console.log(error);
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleNotification = item => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'You clicked on ' + item.country,
      message: 'The city is ' + item.city,
    });
  };

  return (
    <ScrollView style={styles.bodyMain}>
      <View style={styles.body}>
        <FlatList
          horizontal
          data={cities}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                handleNotification(item);
                navigation.navigate('Map', {
                  country: item.country,
                  city: item.city,
                });
              }}>
              <View style={styles.item}>
                <Text style={styles.textSmall}>{item.country}</Text>
                <Text style={styles.innerTextSmall}>{item.city}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.textSmall}>Welcome {name} !</Text>
        <Text style={styles.textSmall}>You are {age} years old. !</Text>
        <TextInput
          style={GlobalStyles.TextInput}
          placeholder={'Enter Name'}
          value={name}
          onChangeText={value => dispatch(setName(value))}
        />
        <CustomButton onPressFunction={updateData} title={'Update'} />
        <CustomButton
          onPressFunction={() => {
            dispatch(increaseAge());
          }}
          title={'Increase Age'}
        />
        <CustomButton
          onPressFunction={() => {
            dispatch(decreaseAge());
          }}
          title={'Decrease Age'}
        />
        <CustomButton onPressFunction={removeData} title={'Remove'} />
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#0f04' : '#dddd',
              margin: 30,
              padding: 10,
            },
          ]}
          onPress={() =>
            navigation.navigate('Profile2', {name: name, age: age})
          }>
          <Text style={styles.textSmall}>Go to {name}'s friends.</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textSmall: {
    margin: 10,
    fontFamily: 'Lora-VariableFont_wght',
    color: '#ffffff',
    fontSize: 24,
  },
  innerTextSmall: {
    margin: 10,
    fontFamily: 'Lora-VariableFont_wght',
    color: '#ffffff',
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  body: {
    backgroundColor: '#4d7487',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyMain: {
    backgroundColor: '#4d7487',
    flex: 1,
  },
  item: {
    backgroundColor: '#b8cad490',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#11111150',
    width: 200,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
