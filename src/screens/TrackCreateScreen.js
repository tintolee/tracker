import React, {useContext} from 'react'
import { SafeAreaView} from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';
import Map from '../Components/Map'
import { withNavigationFocus } from 'react-navigation'
import '../_mockLocation'
import { Context as LocationContext } from '../Context/LocationContext';
import useLocation from '../Hooks/useLocation';
import TrackForm from '../Components/TrackForm';



 const TrackCreateScreen =({isFocused})=> { 
      

     const {state,addLocation}= useContext(LocationContext)
        const [Err] = useLocation((location)=> addLocation(location,state.recording),isFocused)


    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
             <Map/>
             {Err ? <Text>Please enable location services</Text> : null}
             <TrackForm/>
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen)