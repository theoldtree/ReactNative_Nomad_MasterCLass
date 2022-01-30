import React from 'react';
import { StyleSheet, View, Text} from 'react-native'

export default function TV(){
    return(
    <View style={styles.container}>
        <Text>
            TV
        </Text>
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