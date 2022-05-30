import { View, Text,StyleSheet,Platform} from 'react-native'
import React from 'react'
import SplashHeader from '../component/splashHeader'
import SplashIcon from '../component/splashIcon'

export default function Home() {
  return (
    <View style={styles.container}>
      <SplashHeader/>
      <SplashIcon/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      marginTop:Platform.OS=="android"?30:0
    }
})