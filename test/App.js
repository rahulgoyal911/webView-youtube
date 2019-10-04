/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      <WebView source={{ uri: 'https://youtube.com' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
    },
  }
);