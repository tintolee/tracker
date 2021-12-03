import React,{useState} from 'react'
import {StyleSheet } from 'react-native'
import { Button,Text,Input } from 'react-native-elements';
import Spacer from './Spacer';

export default function AuthForm({headerText,errorMessage,onSubmit,ButonTitle}) {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
  

    return (
        <>
            <Spacer>
              <Text h3 >{headerText}</Text>
              </Spacer>
              <Spacer/>
              
            <Input label="Email"  
               autoCapitalize="none"
               autoCorrect={false}
            value={email} onChangeText={(e)=> setemail(e)}/>
              <Spacer/>
            <Input label="Password"  
             secureTextEntry
               autoCapitalize="none"
               autoCorrect={false}
            value={password} onChangeText={(e)=> setpassword(e)}/>
           {errorMessage ? <Text style={styles.errorMessage}> {errorMessage}  </Text> : null}
            <Spacer>
            <Button title={ButonTitle}  onPress={()=>onSubmit({email,password})}/>
            </Spacer>
        </>
    )
}



const styles=StyleSheet.create({
    errorMessage:{
        fontSize:16,
        color:'red',
        marginLeft:15,
        marginTop:5,
       
     },
})