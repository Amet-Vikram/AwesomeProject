import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import CustomButton from '../utils/CustomButton';

export const Camera = () => {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  const captureHandler = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <CustomButton title="Click" onPressFunction={() => captureHandler()} />
      </RNCamera>
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
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
