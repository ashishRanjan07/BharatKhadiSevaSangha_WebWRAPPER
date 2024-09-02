import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {AppColor} from './Color';

const Wrapper = () => {
  const [isLoading, setIsLoading] = useState(false);
  const webViewRef = React.useRef(null);

  useEffect(() => {
    const backAction = () => {
      if (webViewRef.current) {
        webViewRef.current.goBack(); 
        return true; 
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);
  

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={AppColor.primary} barStyle={'dark-content'} />
      {isLoading && (
        <View style={styles.loaderView}>
          <View style={styles.loaderContainer}>
            <Image
              source={require('../src/assets/loader.jpeg')}
              resizeMode="contain"
              style={{height: 100, width: '80%'}}
            />
            <Text style={styles.loaderText}>Please wait...</Text>
          </View>
        </View>
      )}
      <WebView
        ref={webViewRef} // Assigning the ref to the WebView
        source={{
          uri: 'https://www.khadindia.com',
        }}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        style={isLoading ? {display: 'none'} : {flex: 1}}
      />
    </View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },

  loaderContainer: {
    borderWidth: 2,
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 10,
    borderRadius: 10,
    borderColor: AppColor.primary,
    backgroundColor: AppColor.white,
    alignItems: 'center',
  },
  loaderText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  loaderView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
  },
});
