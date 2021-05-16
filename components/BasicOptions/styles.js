import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
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
export default styles;
