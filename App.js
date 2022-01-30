import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useAssets } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tab';

export default function App() {
  const [assets] = useAssets([require('./assets/greeting.png')])

  if(!assets)
  return (
    <AppLoading/>
  )
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
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
