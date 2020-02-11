import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  button: {
    color: '#381460',
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#FFF',
    textAlign: 'center',
    borderWidth: 0.5,
    borderColor: '#a278b5',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#381460',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export default props => {
  const stylesButton = [styles.button];

  if (props.double) {
    stylesButton.push(styles.buttonDouble);
  }

  if (props.triple) {
    stylesButton.push(styles.buttonTriple);
  }

  if (props.operation) {
    stylesButton.push(styles.operationButton);
  }

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};
