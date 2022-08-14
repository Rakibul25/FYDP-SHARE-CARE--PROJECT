import React from 'react';
import { View,  Image, StyleSheet , Text} from 'react-native';
import SignupForm from '../components/signupScreen/SignupForm';


const SHARECARE_LOGO = 'https://www.uiu.ac.bd/wp-content/uploads/2016/02/UIU-Logo-250.png'


const SignupScreen = ({navigation}) => (
    <View style={styles.container}>
       <View  style={styles.logoContainer}>
           <Image source={{uri:SHARECARE_LOGO , height:100, width: 100, }} />
       </View>
        <View>
           <Text style={styles.titlestyle}>SHARECARE UIU COMMUNITY</Text>
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

     titlestyle:{
      alignItems:'center',
      paddingHorizontal: 80,
      paddingTop:10,
      fontSize: 14,
      fontWeight:'600',
      color: 'grey',
     },
})

export default SignupScreen;
