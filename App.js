import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Font } from 'expo-font';
import IntroPage from './screens/IntroPage';
import Navigator from './routes/homeStack';
import AppLoading from 'expo-app-loading';
import PieChart from './assets/pie_chart-24px.svg';

const { height, width } = Dimensions.get('window')


// const getFont = () => Font.loadAsync({
//     'Arial':require('./assets/fonts/arial.ttf')
  // });

  
export default class App extends React.Component{
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
      <Navigator  />
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
