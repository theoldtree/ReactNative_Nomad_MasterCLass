import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import styled from 'styled-components/native'

export default function TV(){
    return(
    <View style={styles.container}>
        <ActivityIndicator color="#0000ff"/>
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