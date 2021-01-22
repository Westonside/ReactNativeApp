import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';


const PieChart = () =>{
    return (
        <Svg style={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          height={380}
          viewBox="0 0 380 380"
          width={380}
          fill="red"
          
        >
          <Path d="M0 0h24v24H0V0z" fill="none" />
          <Path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
        </Svg>
      )
}

const styles = StyleSheet.create({
    icon:{
        justifyContent:'center',
        alignItems:'center'
    }
})

export default PieChart;