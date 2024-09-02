import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Wrapper from './src/Wrapper';
import NetInfo from '@react-native-community/netinfo';
import NoInternet from './src/NoInternet';

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={{flex: 1}}>{isConnected ? <Wrapper /> : <NoInternet />}</View>
  );
};

export default App;
