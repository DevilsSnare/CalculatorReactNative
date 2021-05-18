import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default function App () {
  const clearEver = () => {
    output = '';
    opOut = '';
    setOutput (output);
    setOpOut (opOut);
  };
  const calculate = val => {
    opOut = '';
    setOpOut ('');
    setOutput (eval (val));
  };
  let [output, setOutput] = useState ('');
  let [opOut, setOpOut] = useState ('');
  const write = val => {
    if (val == 'DEL') {
      opOut = opOut.slice (0, -1);
      setOpOut (opOut);
      return;
    }
    if (val == '=') {
      calculate (opOut);
      return;
    }
    opOut = opOut + val;
    setOpOut (opOut);
  };

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
  let ok = ['DEL', '/', '*', '-', '+'];
  for (let i = 0; i < 5; i++) {
    if (ok[i] == 'DEL') {
      oper.push (
        <View style={styles.operations}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => write (ok[i])}
            onLongPress={() => clearEver ()}
          >
            <Text style={styles.txt}>DEL</Text>
          </TouchableOpacity>
        </View>
      );
      continue;
    }
    oper.push (
      <View style={styles.operations}>
        <TouchableOpacity style={styles.button} onPress={() => write (ok[i])}>
          <Text style={styles.txt}>{ok[i]}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.output}>
        <Text style={styles.outtxt}>{output}</Text>
      </View>
      <View style={styles.operationOutput}>
        <Text style={styles.operationOutputtxt}>{opOut}</Text>
      </View>
      <View style={styles.operations}>
        <View style={styles.basicOptions}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operationsX}>
            {/* <View style={styles.operations}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => write (ok[i])}
                onLongPress={() => clearEver ()}
              >
                <Text style={styles.txt}>DEL</Text>
              </TouchableOpacity>
            </View> */}
            {oper}
          </View>
        </View>
        {/* <View style={styles.sciOptions} /> */}
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
    flex: 0.25,
    backgroundColor: '#f0e3ca',
  },
  outtxt: {
    fontSize: 50,
    color: '#1b1a17',
    textAlign: 'right',
    marginTop: '20%',
    marginRight: '3%',
  },
  operationOutput: {
    width: '100%',
    flex: 0.10,
    backgroundColor: '#f0e3ca',
  },
  operationOutputtxt: {
    fontSize: 40,
    color: '#1b1a17',
    textAlign: 'right',
    marginTop: '2%',
    marginRight: '3%',
  },
  operations: {
    width: '100%',
    flex: 0.65,
    backgroundColor: '#a35709',
    flexDirection: 'row',
    //a35709
  },
  basicOptions: {
    flex: 1,
    flexDirection: 'row',
  },
  /*sciOptions: {
    flex: 0.05,
    backgroundColor: '#ff8303',
  },*/
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
