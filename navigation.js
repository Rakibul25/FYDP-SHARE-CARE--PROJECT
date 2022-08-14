import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';


export default function RootNavigation() {
    const Stack = createNativeStackNavigator();

//      const screenOptions = {
//     headerShown: false,
//   };


  return (
    <NavigationContainer>
         <Stack.Navigator 
            initialRouteName="Home" 
            // screenOptions={screenOptions}
         >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
