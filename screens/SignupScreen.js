import React from 'react';
import { View,  Image, StyleSheet } from 'react-native';
import SignupForm from '../components/signupScreen/SignupForm';


const INSTAGRAM_LOGO = 'https://www.uiu.ac.bd/wp-content/uploads/2016/02/UIU-Logo-250.png'


const SignupScreen = ({navigation}) => (
    <View style={styles.container}>
       <View  style={styles.logoContainer}>
           <Image source={{uri:INSTAGRAM_LOGO , height:100, width: 100, }} />
       </View>
        {/* SignupForm */}
        <SignupForm navigation={navigation} />

    </View> 
  )
 

const styles = StyleSheet.create({
     container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:50,
        paddingHorizontal:12,
     },
     logoContainer:{
        alignItems:'center',
        marginTop:60 ,
     }, 
})

export default SignupScreen
