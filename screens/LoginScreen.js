import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LoginForm from '../components/loginScreen/LoginForm';

const INSTAGRAM_LOGO = 'https://www.uiu.ac.bd/wp-content/uploads/2016/02/UIU-Logo-250.png'


const LoginScreen = ({navigation}) => (
    <View style={styles.container}>
       <View  style={styles.logoContainer}>
           <Image source={{uri:INSTAGRAM_LOGO , height:100, width: 100, }} />
       </View>
        {/* loginForm */}
        < LoginForm navigation={navigation} />

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

export default LoginScreen