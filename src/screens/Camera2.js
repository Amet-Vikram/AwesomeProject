import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import CustomButton from '../utils/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';

export const Camera2 = ({navigation}) => {
  const [image, setImage] = useState('.assets/icon1.png');

  const pickImageHandler = () => {
    console.warn('pick image');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };
  const clickImageHandler = () => {
    console.warn('click image');
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  return (
    <View style={styles.body}>
      <View>
        <ImageBackground
          style={styles.image}
          source={{uri: image}}
          imageStyle={{borderRadius: 15}}
        />
      </View>
      <CustomButton
        title="Pick a picture"
        onPressFunction={() => pickImageHandler()}
      />
      <CustomButton
        title="Click a picture"
        onPressFunction={() => clickImageHandler()}
      />
      <CustomButton
        title="Cancel"
        onPressFunction={() => navigation.navigate('Home')}
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
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    backgroundColor: '#4d7447',
    height: 400,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
