import React , {useContext}from 'react'
import { View , StyleSheet} from 'react-native'
import Spacer from '../Components/Spacer';
import { Context as AuthContext} from '../Context/AuthContext';
import AuthForm from '../Components/AuthForm';
import NavLink from '../Components/NavLink';
import { NavigationEvents } from 'react-navigation';




export default function SignupScreen({navigation}) {
  const {state,signup, n, clearErrorMessage} = useContext(AuthContext)

    return (
        <View style={styles.container}>
             <NavigationEvents onWillBlur={clearErrorMessage} />
           <AuthForm 
           headerText='Sign Up for Tracker'
           errorMessage={state.errorMessage}
           ButonTitle='Sign Up'
           onSubmit={signup}
           />
           
           <Spacer/>
           <NavLink linkText='Already have an account? SIgn in instead'
             routeName="Signin"
           
           />
             </View>
         )
        }
         
        const styles=StyleSheet.create({

    container:{
        marginBottom: 200,
        flex: 1,
        justifyContent: 'center'
    },
    
    

})

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };



