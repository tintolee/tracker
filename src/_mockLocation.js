import * as Location from 'expo-location'
import { LocationEventEmitter } from 'expo-location/build/LocationEventEmitter'


const tenMetersWithDegrees= 0.0001



const getLocation=increment=>{

   return{
    timestamp:100000000,
    coords:{
     speed: 0,
     heading:0,
     accuracy: 5,
     altitudeAccuracy: 5,
     altitude: 5,
     longitude: 7.4750452 + increment * tenMetersWithDegrees ,
     latitude: 9.0908262 + increment * tenMetersWithDegrees

    }


   }
}


let counter= 0
setInterval(()=>{
    LocationEventEmitter.emit('Expo.locationChanged',{
   watchId: Location._getCurrentWatchId(),
   location:getLocation(counter)       
    })
    counter++
}, 1000)