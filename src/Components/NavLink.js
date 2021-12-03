import React from 'react'
import { StyleSheet,TouchableOpacity} from 'react-native'
import { Text} from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

function NavLink({navigation,linkText,routeName}) {
    return (
    
             <TouchableOpacity onPress={()=> navigation.navigate(routeName)}>
            <Spacer>
             <Text style={styles.Link}>{linkText}</Text>
             </Spacer>
            </TouchableOpacity>
          
       
    )
}


styles= StyleSheet.create({
    Link:{
        color:'blue'
      }

})


export default withNavigation(NavLink)