import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { View, SafeAreaView,} from 'react-native';
import HomeScreens from '../components/Home/HomeScreens';
import BottomTabs from '../components/Home/BottomTabs';





export default function Home() {
   
  return (
    <SafeAreaView  style={{ backgroundColor:'#eee', flex:1, paddingTop: Platform.OS === 'ios' ? 0:Constants.statusBarHeight, }}>
          <HomeScreens />

          <View>
             <BottomTabs />
          </View>
         
    </SafeAreaView>
  );
}

