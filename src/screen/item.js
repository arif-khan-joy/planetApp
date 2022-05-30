import { View ,Image,StyleSheet,Pressable ,Platform} from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import Text from '../component/text/text'
import { spacing } from '../theme/spacing'
import { EvilIcons } from '@expo/vector-icons';
export default function Item({navigation}) {
  return (
    <View>
        <View style={styles.container}>
           <Image style={styles.bgImage} source={require('../../assets/Media.png')}/>
        </View>
        <View style={styles.textSection}>
            <Text preset="h2" style={styles.boston}>Boston Lettuce</Text>
            <Image style={styles.price} source={require('../../assets/Price.png')}/>
            <Text style={{color:colors.splashButton,marginLeft:20,fontWeight:'bold'}} preset="small">-150 gr/price</Text>
            <Text style={styles.spain} preset="h3">Spain</Text>
            <Text style={styles.itemText} preset="h4">Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
        </View>
        <View style={styles.fullCart}>
            <Image style={styles.love} source={require('../../assets/love.png')}/>
           <View > 
             
             <Pressable onPress={()=>
            navigation.goBack()
            } style={styles.cartButton}>
             <EvilIcons name="cart" size={24} color="white" />
                 <Text style={{color:colors.white,marginLeft:10,fontWeight:'bold'}}>ADD TO CART</Text>
             </Pressable>
           </View>
        </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
    bgImage:{
        height:300
    },
    boston:{
        color:colors. splashText,
        marginLeft:20,
        marginTop:spacing[5]
    },
    price:{
        width:150,
        marginLeft:20,
        height:30,
    },
    spain:{
        color:colors.splashText,
        marginLeft:20,
        marginTop:20
    },
    itemText:{
        color:colors. splashPrimary,
        fontSize:15,
        marginLeft:20,
        textAlign:'justify',
        marginRight:20
    },
    cartButton:{
        width:200,
        backgroundColor:colors.splashButton,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderRadius:10
        
    },
    mainCart:{
        flexDirection:'row'
    },
    fullCart:{
        flexDirection:'row',
        marginTop:spacing[5],
        marginLeft:20
    },
    love:{
        height:50,
        marginRight:20
    },
    container:{
        marginTop:Platform.OS=="android"?30:0,
       
      
    },
    textSection:{
        
       
    }
})