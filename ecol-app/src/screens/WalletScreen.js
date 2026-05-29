import React, {
 useContext,
} from 'react';

import {
 View,
 Text,
} from 'react-native';

import {
 WalletContext
} from '../context/WalletContext';

export default function WalletScreen() {

 const {
  points,
  sol,
 } = useContext(WalletContext);

 return (

  <View
   style={{
    flex:1,
    backgroundColor:'#041A1F',
    justifyContent:'center',
    alignItems:'center',
    padding:30,
   }}
  >

   <Text
    style={{
     color:'#22FF88',
     fontSize:40,
     fontWeight:'bold',
    }}
   >
    Wallet Solana
   </Text>

   <Text
    style={{
     color:'#FFF',
     fontSize:28,
     marginTop:30,
    }}
   >
    {sol} SOL
   </Text>

   <Text
    style={{
     color:'#22FF88',
     marginTop:20,
     fontSize:32,
     fontWeight:'bold',
    }}
   >
    {points} pontos
   </Text>

   <Text
    style={{
     color:'#FFF',
     marginTop:20,
    }}
   >
    Devnet Connected
   </Text>

   <Text
    style={{
     color:'#888',
     marginTop:10,
    }}
   >
    Phantom Wallet Ready
   </Text>

  </View>
 );
}
