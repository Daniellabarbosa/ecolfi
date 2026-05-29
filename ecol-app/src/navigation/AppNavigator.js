import React from 'react';

import {
 createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import ScanScreen from '../screens/ScanScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {

 return (

  <Tab.Navigator

   screenOptions={{

    headerShown:false,

    tabBarStyle:{
      backgroundColor:'#021014',
      borderTopWidth:0,
      height:70,
      paddingBottom:10,
    },

    tabBarActiveTintColor:'#22FF88',

    tabBarInactiveTintColor:'#888',

   }}

  >

   <Tab.Screen
    name="Home"
    component={HomeScreen}
   />

   <Tab.Screen
    name="Scan"
    component={ScanScreen}
   />

   <Tab.Screen
    name="Wallet"
    component={WalletScreen}
   />

  </Tab.Navigator>
 );
}