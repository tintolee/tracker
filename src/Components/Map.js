import React ,{useContext}from 'react'
import {StyleSheet, ActivityIndicator} from 'react-native'
import MapView , {Polyline, Marker,Circle}from 'react-native-maps'
import { Context as LocationContext } from '../Context/LocationContext'



export default function Map() {
const {state:{currentLocation, locations}} = useContext(LocationContext)
if (!currentLocation){
  return <ActivityIndicator size="large"  style={{marginTop: 28}}/>
}
 
    return (
        
           <MapView
          
           style={styles.map}
           initialRegion={{
               ...currentLocation.coords,
              latitudeDelta:0.01,
               longitudeDelta:0.01
           }}
           region={{
            ...currentLocation.coords,
           latitudeDelta:0.01,
            longitudeDelta:0.01
        }}
            
           >
          <Circle
            center={currentLocation.coords}
            radius={30}
            strokeColor=" rgba(158,158,255,1.0)"
            fillColor= " rgba(158,158,255,0.3)"
          />
         

       <Marker coordinate = {currentLocation.coords}
         pinColor = {"blue"} // any color
         title={"title"}
         description={"description"}/>

        <Polyline coordinates={locations.map((loc) => loc.coords)}  lineDashPattern = {
   [1]
}/>

          </MapView>
    )
}





const styles=StyleSheet.create({

map:{
    height: 300
}

})