import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Font } from 'expo-font';



const { height, width } = Dimensions.get('window')

export default class IntroPage extends React.Component{
  constructor(){
    super();

    this.state = {
      fontLoaded: false
    }
  }

    

  async componentDidMount() {
    
  }

  render(){
    
    return(
      <View style = {styles.container}>
        <Text>Home Page</Text>
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
    marginTop:height*.1,
    textAlign:'center',
    color:'#2699FB',
    fontSize:40,
    fontWeight:'bold',
    // fontFamily: "Arial"
  },
  headerDescription:{
    color:'#2699FB',
    textAlign:'center',
    marginLeft:width*.08,
    justifyContent:'center',
    marginTop:height*.03,
    paddingRight: 20,
    fontSize:14,
    lineHeight:24,
    // fontFamily:'Arial',
    fontWeight:'bold'
  }
});
