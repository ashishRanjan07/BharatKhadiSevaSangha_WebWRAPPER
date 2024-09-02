import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React from 'react';
import {AppColor} from './Color';
import NetInfo from '@react-native-community/netinfo';

const NoInternet = () => {
  const retry = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        Alert.alert('Connected', 'You are connected to the internet!');
        // Add any action you want to perform when connected
      } else {
        Alert.alert('No Internet', 'Please check your internet connection.');
      }
    });
  };

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={AppColor.white} barStyle={'dark-content'} />
      <Image
        source={require('../src/assets/loader.jpeg')}
        resizeMode="contain"
        style={styles.loaderImageStyle}
      />
      <Image
        source={require('../src/assets/noInternet.jpg')}
        resizeMode="cover"
        style={styles.imageStyle}
      />
      <Text style={styles.text}>
        Please check your internet connection or connect to wifi
      </Text>
      <TouchableOpacity style={styles.button} onPress={retry}>
        <Text style={styles.text}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderImageStyle: {
    width: '90%',
    height: 200,
  },
  imageStyle: {
    width: '90%',
    height: 300,
  },
  text: {
    width: '85%',
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    letterSpacing: 1,
  },
  button: {
    borderWidth: 2,
    marginVertical: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: AppColor.primary,
    width: '80%',
    borderColor: AppColor.primary,
    alignItems: 'center',
  },
});
