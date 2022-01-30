import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';

export default function App() {
  const [assets] = useAssets([require('./assets/greeting.png')])
  const [fonts] = Font.useFonts(Ionicons.font)

  if(!assets || !fonts)
  return (
    <AppLoading/>
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
