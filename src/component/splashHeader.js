import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

export default function SplashHeader() {
  return (
    <View style={styles.header}>
        <Image style={styles.image}  source={require('../../assets/LOGO.png')}/>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:colors.splash,
        height:270,

    },
    image:{
        marginTop:63,
        marginLeft:20
    }
})