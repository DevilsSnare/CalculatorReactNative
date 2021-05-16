import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default function App () {
  let rows = [];
  let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0, '.', '=']];
  for (let i = 0; i < 4; i++) {
    let rowx = [];
    for (let j = 0; j < 3; j++) {
      rowx.push (
        <TouchableOpacity
          style={styles.button}
          onPress={() => write (nums[i][j])}
        >
          <Text style={styles.txt}>{nums[i][j]}</Text>
        </TouchableOpacity>
      );
    }
    rows.push (<View style={styles.row}>{rowx}</View>);
  }

  let oper = [];
  let ok = ['<x', '/', 'x', '-', '+'];
  for (let i = 0; i < 5; i++) {
    oper.push (
      <View style={styles.operations}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.txt}>{ok[i]}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.output}>
        <Text style={styles.outtxt}>Output</Text>
      </View>
      <View style={styles.operations}>
        <View style={styles.basicOptions}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operationsX}>
            {oper}
          </View>
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
  outtxt: {
    fontSize: 25,
    color: 'white',
    textAlign: 'right',
    marginTop: '50%',
    marginRight: '3%',
  },
  operations: {
    width: '100%',
    flex: 0.65,
    backgroundColor: '#1b1b2f',
    flexDirection: 'row',
  },
  basicOptions: {
    flex: 0.95,
    flexDirection: 'row',
  },
  sciOptions: {
    flex: 0.05,
    backgroundColor: 'green',
  },
  numbers: {
    flex: 0.75,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  txt: {
    fontSize: 25,
    color: 'white',
  },
  operationsX: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
