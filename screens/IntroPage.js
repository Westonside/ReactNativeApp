import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Font } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
// import PieChart from '../assets/icons/PieChart';


const { height, width } = Dimensions.get('window');

const images = [
  {image : require('../assets/img1.jpg')},
  {image : require('../assets/img2.jpg')},
  {image : require('../assets/img3.jpg')},
]

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
        <View style = {styles.statusBar}></View>
        <Text style = {styles.header}>Welcome</Text>
        <Text style = {styles.headerDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus nunc eget risus efficitur auctor. </Text>
        <ScrollView>
        {
          images.map((item, index) => (
            <Image 
              key = {index}
              source = {item.image}
              style = {styles.icon}/>
          ))
        }
        </ScrollView>
      </View>
    )
  }
}



// Text Color #2699FB
// 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  icon:{
    alignItems:'center',
    marginTop:height*.1,
    justifyContent:'center',
    width:'100%', 
    // height:height*.4,
    height:300,
    resizeMode:'contain'
  }
});
