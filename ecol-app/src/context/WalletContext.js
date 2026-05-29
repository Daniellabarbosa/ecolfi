import React, {
 createContext,
 useState,
} from 'react';

export const WalletContext =
 createContext();

export const WalletProvider =
({children}) => {

 const [points,setPoints] =
 useState(240);

 const [sol,setSol] =
 useState(2.45);

 function recycle(score){

  setPoints(prev => prev + score);

  setSol(prev =>
   Number((prev + score/100).toFixed(2))
  );
 }

 return (

  <WalletContext.Provider
   value={{
    points,
    sol,
    recycle,
   }}
  >

   {children}

  </WalletContext.Provider>
 );
};