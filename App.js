import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import BasicOptions from './components/BasicOptions';
export default function App () {
  return (
    <View style={styles.container}>
      <View style={styles.output} />
      <View style={styles.operations}>
        <View style={styles.basicOptions}>
          <BasicOptions />
        </View>
        <View style={styles.sciOptions} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  output: {
    width: '100%',
    flex: 0.35,
    backgroundColor: '#162447',
  },
  operations: {
    width: '100%',
    flex: 0.65,
    backgroundColor: '#1b1b2f',
    flexDirection: 'row',
  },
  basicOptions: {
    flex: 0.95,
  },
  sciOptions: {
    flex: 0.05,
    backgroundColor: 'green',
  },
});
