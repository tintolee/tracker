import AsyncStorage from '@react-native-async-storage/async-storage'

import createDataContext from "./createDataContext";
import trackerAPI from '../API/Tracker'
import { navigate } from '../navigationRef';


const authReducer= (state,action)=>{
switch(action.type){
  
    case 'add_error':
        return {...state, errorMessage: action.payload}
    case'signup':
  return{errorMessage:'', token:action.payload}
  case'signin':
  return{errorMessage:'', token:action.payload}
  case'clear_error_message':
  return{...state, errorMessage:''}
  case 'signout' :
      return {token:null, errorMessage:''}
  default:
    return state

}

}
 const tryLocalSignin =dispatch=> async ()=>{
   const token = await AsyncStorage.getItem('token')
    if (token){
       dispatch ({type: 'signin', payload: token})
       navigate('TrackList')
    } else{
        navigate('Signup')
    }
}

const clearErrorMessage=dispatch=>()=>{

    dispatch({type:'clear_error_message'})
}


const signup=(dispatch)=>{
    return async ({email,password})=>{   
     // make API request to sign up with  with thay email and password
     //if we sign up, modify our state and say that we are authenticated
     // if signing up fails, we need to reflect an error message 
 try{
  const response= await trackerAPI.post('/signup', {email,password})
     // getting and storing the token
  await AsyncStorage.setItem('token',response.data.token)
   dispatch({type:'signup', payload:response.data.token})
   // navigate to Track List
   navigate('TrackList')
}catch(err){
    dispatch({type: 'add_error', payload: 'There is a problem with sign up'})
}

    }
}



const signin=(dispatch)=>{
    return async ({email,password})=>{   
     // make API request to signin with  with thay email and password
     //handle success by updating state
     // if signing in fails, we need to reflect an error message 
     try{
        const response= await trackerAPI.post('/signin', {email,password})
           // getting and storing the token
        await AsyncStorage.setItem('token',response.data.token)
         dispatch({type:'signin', payload:response.data.token})
         // navigate to Track List
         navigate('TrackList')
      }catch(err){
          dispatch({type: 'add_error', payload: 'Someting went wrong with with sign in'})
      }

    }
}

const signout=(dispatch)=>{
    return async ()=>{   
     // sign out
     await AsyncStorage.removeItem('token')
      dispatch({type: signout})
      navigate('loginFlow')
    }
}



export const   {Provider,Context}= createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage,tryLocalSignin},
    //no token means not logged in
    {token:null, errorMessage:''}
)