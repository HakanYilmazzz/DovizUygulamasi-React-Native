import React, { Component } from 'react';
import { StyleSheet, Text, View,WebView } from 'react-native';
import Home from "./component/home"





export default class App extends React.Component {
    

  render() {
    
        return (
      <View style={styles.container}>
        <Home/>
      
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    
    
    
  },
  
});
