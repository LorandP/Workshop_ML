/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.base}>
      <TouchableOpacity style={styles.button}>
        <Text> Choose a picture </Text>
      </TouchableOpacity>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 200,
    height: 100,
    backgroundColor: 'orange',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
