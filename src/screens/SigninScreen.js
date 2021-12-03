import React , {useContext} from 'react'
import { View, StyleSheet } from 'react-native'
import AuthForm from '../Components/AuthForm';
import NavLink from '../Components/NavLink';
import { Context } from '../Context/AuthContext';
 import { NavigationEvents } from 'react-navigation';


export default function SigninScreen() {
   const {state,signin,clearErrorMessage} =useContext(Context)



    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
           <AuthForm 
           headerText="Sign in into your account"
           errorMessage={state.errorMessage}
           onSubmit={signin}
           ButonTitle='Sign in'
           />
           <NavLink linkText='Dont have an accout? Sign up instead'
           routeName='Signup'
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


    SigninScreen.navigationOptions = () => {
        return {
          headerShown: false,
        };
      }
    





  
