import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native';
import { useAssets } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tab';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import styled, { ThemeProvider } from 'styled-components/native'
import { darkTheme, lightTheme } from './styles/styled';

export default function App() {
  const [assets] = useAssets([require('./assets/greeting.png')])
  const [fonts] = useFonts(Ionicons.font)
  const isDark = useColorScheme() === "Dark"

  if (!assets || !fonts)
    return (
      <AppLoading />
    )
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
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
