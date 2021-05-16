import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import styles from './styles';
const basicOptions = props => {
  let rows = [];
  let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0, '.', '=']];
  for (let i = 0; i < 4; i++) {
    let rowx = [];
    for (let j = 0; j < 3; j++) {
      rowx.push (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.txt}>{nums[i][j]}</Text>
        </TouchableOpacity>
      );
    }
    rows.push (<View style={styles.row}>{rowx}</View>);
  }

  let oper = [];
  let ok = ['Back', '/', 'x', '-', '+'];
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
      <View style={styles.numbers}>
        {rows}
      </View>
      <View style={styles.operations}>
        {oper}
      </View>
    </View>
  );
};
export default basicOptions;
