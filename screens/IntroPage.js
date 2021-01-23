import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Font } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
// import PieChart from '../assets/icons/PieChart';


const { width } = Dimensions.get('window');
const win = Dimensions.get('window');
const height = width*0.6;

const images = [
  { image: require('../assets/img1.jpg'), text:'slide1' },
  { image: require('../assets/img2.jpg'), text:'slide2' },
  { image: require('../assets/img3.jpg'), text:'slide3' },
]

export default class IntroPage extends React.Component {
  constructor() {
    super();
    this.handleOnScroll = this.handleOnScroll.bind(this);


    this.state = {
      fontLoaded: false,
      iconActive: 0,
    }
  }



  async componentDidMount() {

  }
  

  // changeIcon = ({nativeEvent}) =>{
  //   //divide the offset of the swipe by the sections of images
  //   //round it then change 
  //   console.error('running')
  //   let swipe = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
  //   if(swipe !== this.state.iconActive){
  //     this.setState({active:swipe});
  //   }
  // }

  handleOnScroll = ({nativeEvent}) =>{
    let swipe = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    console.log(swipe)
      if(swipe !== this.state.iconActive){
        this.setState({iconActive:swipe});
      }
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.statusBar}></View>
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.headerDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus nunc eget risus efficitur auctor. </Text>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll = {this.handleOnScroll}
          showsHorizontalScrollIndicator={false}
          horizontal style = {{width, height}}>
          {
            images.map((item, index) => (
              <View>
                <Image
                  key={index}
                  source={item.image}
                  style={{width,height,resizeMode:'contain', marginTop:width*.25}} />

                <Text style ={{textAlign:'center'}}>{item.text}</Text>

                </View>
            ))
              
          }
        </ScrollView>
        <View 
        style={{flexDirection:'row', position:'absolute', bottom:'20%', alignSelf:'center'}}>
          {
            images.map((image, index) =>(
              <Text style = {index === this.state.iconActive ? styles.iconActive : styles.iconNotActive} key={index}>⬤</Text>
            ))
          }
        
        </View>
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
  statusBar: {
    backgroundColor: '#fff',
    height: 20
  },
  header: {
    marginTop: height * .1,
    textAlign: 'center',
    color: '#2699FB',
    fontSize: 40,
    fontWeight: 'bold',
    // fontFamily: "Arial"
  },
  headerDescription: {
    color: '#2699FB',
    textAlign: 'center',
    marginLeft: width * .08,
    justifyContent: 'center',
    marginTop: height * .03,
    paddingRight: 20,
    fontSize: 14,
    lineHeight: 24,
    // fontFamily:'Arial',
    fontWeight: 'bold'
  },
  iconNotActive: {
    color:'#2699FB',
    marginRight:10,
    
  },
  iconActive:{
    color:'#0066a6',
    marginRight:10,
  }
});
