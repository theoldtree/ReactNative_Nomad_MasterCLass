import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';

export default function App() {
  const [ready,setReady] = useState(false);
  const onFinish = () => {setReady(true)};
  const startLoading = async() => {
    await Font.loadAsync(Ionicons.font)
    await Asset.loadAsync(require('./assets/greeting.png'))
  }

  if(!ready)
  return (
    <AppLoading
      onFinish = {onFinish}
      startAsync = {startLoading}
      onError = {console.error}
    />
  )
  return (
    <View style = {styles.container}>
      <Text>Your app started!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
