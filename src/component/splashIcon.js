import { View,Image,StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import Text from './text/text'
import { useNavigation } from '@react-navigation/native';
export default function SplashIcon() {
    const navigation = useNavigation();
  return (
    <View style={styles.icon}>
       <Image source={require('../../assets/Icon.png')}/>
       <Text style={styles.text} preset="h2">Non-Contact Deliveries</Text>
       <Text preste="small" style={styles.textPrimary}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the.</Text>
       <Pressable onPress={()=>
        navigation.navigate('Item')
    } 
    style={styles.button}>
           <Text style={styles.buttonText}>ORDER NOW</Text>
       </Pressable>
       <Text style={styles.dismiss}>DISMISS</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    icon:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:45,
        backgroundColor:colors.splashBackground,
        marginTop:-20,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        
        
    },
    text:{
        paddingHorizontal:50,
        width:300,
        textAlign:'center',
        marginVertical:20,
        lineHeight:42

    },
    textPrimary:{
        paddingHorizontal:19,
        textAlign:'center',
        lineHeight:25

    },
    button:{
        width:300,
        height:50,
        backgroundColor:colors.splashButton,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:20
    },
    buttonText:{
        color:colors.white,
        fontWeight:'bold',
        
        
    },
    dismiss:{
        fontSize:12,
        padding:20
    }
})
