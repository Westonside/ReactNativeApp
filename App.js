import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.statusBar}></View>
        <Text style = {styles.header}>Welcome</Text>
        <Text style = {styles.headerDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus nunc eget risus efficitur auctor. </Text>
      </View>
    )
  }
}



// Text Color #2699FB
// 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusBar:{
    backgroundColor: '#fff',
    height: 20
  },
  header:{
    marginTop:40,
    textAlign:'center',
    color:'#2699FB',
    fontSize:40,
    fontWeight:'bold'
  },
  headerDescription:{
    color:'#2699FB',
    textAlign:'center',
    marginLeft:20,
    justifyContent:'center',
    marginTop:15,
    paddingRight: 20,
    fontSize:14,
    lineHeight:30,
  }
});
