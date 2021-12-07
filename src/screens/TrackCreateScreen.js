import React, {useContext, useCallback} from 'react'
import { SafeAreaView} from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';
import Map from '../Components/Map'
import { withNavigationFocus } from 'react-navigation'
import '../_mockLocation'
import { Context as LocationContext } from '../Context/LocationContext';
import useLocation from '../Hooks/useLocation';
import TrackForm from '../Components/TrackForm';
import {FontAwesome} from '@expo/vector-icons'

const TrackCreateScreen = ({ isFocused }) => {
    const { state:{recording}, addLocation } = useContext(LocationContext);
    const callback = useCallback(
      location => {
        addLocation(location,recording);
      },
      [recording]
    );
    const [Err] = useLocation(isFocused || recording, callback);
  
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text h2>Create a Track</Text>
        <Map />
        {Err ? <Text>Please enable location services</Text> : null}
        <TrackForm />
      </SafeAreaView>
    );
  };
  
  TrackCreateScreen.navigationOptions={
    title: 'Add Track',
    tabBarIcon: <FontAwesome name ="plus" size ={20} />
  }
  
  
  export default withNavigationFocus(TrackCreateScreen);
  