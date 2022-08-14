import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';


export default function RootNavigation() {
    const Stack = createNativeStackNavigator();

//      const screenOptions = {
//     headerShown: false,
//   };


  return (
    <NavigationContainer>
         <Stack.Navigator 
            initialRouteName="LoginScreen" 
            // screenOptions={screenOptions}
         >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen  name='SignupScreen' component={SignupScreen}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
