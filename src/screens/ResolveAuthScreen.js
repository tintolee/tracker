import React, {useEffect,useContext} from 'react'
import {Context as AuthContext} from '../Context/AuthContext'


export default function ResolveAuthScreen() {
    const {tryLocalSignin}= useContext(AuthContext)
      
    useEffect(() => {
        tryLocalSignin()
        
    }, [])

    
    return null
}




ResolveAuthScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };