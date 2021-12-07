import React ,{useContext}from 'react'
import {FontAwesome} from '@expo/vector-icons'
import { Button,Text } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import { Context as AuthContext} from  '../Context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context';



export default function AccountScreen() {
    const {signout}= useContext(AuthContext)


    return (
        <SafeAreaView forceInset={{ top:'always'}}>
            
            <Text style={{fontSize:48}}>Account Screen</Text>
            <Spacer>
         <Button title='Sign Out'  onPress={signout}/>
           </Spacer>
        </SafeAreaView>
    )
}



AccountScreen.navigationOptions={
    title: 'Account',
    tabBarIcon: <FontAwesome name ="gear" size ={20} />
  }
  
