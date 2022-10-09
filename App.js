/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'orange',
    },
  });

  const styleText = StyleSheet.create({
    color: 'white',
    fontSize: 40,
  });

  return (
    <View style={styles.container}>
      <Text style={styleText}>Te amo gorda!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
