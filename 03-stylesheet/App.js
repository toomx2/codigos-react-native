import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component{
 render(){
  return(
    <View style={styles.area}>
      <Text style={styles.textoPrincipal}>One</Text>
      <Text style={styles.alinhaTexto}>Two</Text>
      <Text>Three</Text>
      <Text style={styles.textoPrincipal}>Four</Text>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  area:{
    marginTop: 330
  },
  textoPrincipal:{
    fontSize: 30,
    color:'purple'
  },
  alinhaTexto:{
    textAlign: 'center'
  }
})

export default App;
