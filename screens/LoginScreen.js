import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LoginForm from '../components/loginScreen/LoginForm';

const SHARECARE_LOGO = 'https://www.uiu.ac.bd/wp-content/uploads/2016/02/UIU-Logo-250.png'


const LoginScreen = ({navigation}) => (
    <View style={styles.container}>
       <View  style={styles.logoContainer}>
           <Image source={{uri:SHARECARE_LOGO , height:100, width: 100, }} />
       </View>
        <View>
           <Text style={styles.titlestyle}>SHARECARE UIU COMMUNITY</Text>
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
     titlestyle:{
      alignItems:'center',
      paddingHorizontal: 80,
      paddingTop:10,
      fontSize: 14,
      fontWeight:'600',
      color: 'grey',
      
     },

})

export default LoginScreen;