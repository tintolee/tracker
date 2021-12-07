import React, {useContext} from 'react'
import { Text , StyleSheet} from 'react-native'
import { Context } from '../Context/TrackContext'
import MapView , {Polyline}from 'react-native-maps'




export default function TrackDetailScreen({navigation}) {
    const {state} = useContext(Context)
    const _id = navigation.getParam('_id')
    const track = state.find(t=> t._id=== _id )
    const initialCoords= track.locations[0].coords

    return (
        <>
            <Text>{track.name}</Text>
            <MapView  
            initialRegion={{
                longitudeDelta:0.01,
                latitudeDelta: 0.01,
                ...initialCoords
            }}
            style= {styles.map}
            >
                <Polyline lineDashPattern={[0]}    strokeColors={[
			'#0000FF'
		
		]}
		strokeWidth={3} coordinates={track.locations.map(loc=> loc.coords)}  />
            </MapView>
        </>
    )
}


 const styles= StyleSheet.create({
     map:{
         height:300
     }
 })