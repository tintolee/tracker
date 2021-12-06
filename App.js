import React from "react";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import { Provider  as AuthProvider} from "./src/Context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import {Provider as LocationProvider} from './src/Context/LocationContext'

const switchNavigator=createStackNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin:SigninScreen
  }),

   mainFlow: createBottomTabNavigator({

          trackListFlow:createStackNavigator({
             TrackList:TrackListScreen,
             TrackDetail: TrackDetailScreen
          }),
        TrackCreate:TrackCreateScreen,
        Acount: AccountScreen
   })

})



const App= createAppContainer(switchNavigator)

export default()=>{
return(
  <LocationProvider>
  <AuthProvider>
    <App ref ={(navigator)=>{setNavigator(navigator)}}/>
  </AuthProvider>
  </LocationProvider>
)

}