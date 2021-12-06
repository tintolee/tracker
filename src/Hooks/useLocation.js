import {useState,useEffect} from 'react'
import { Accuracy, watchPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'





export default(callback, shouldTrack)=>{
    const [Err, setErr] = useState(null)
      const [subscriber, setSubscriber] = useState(null)

    
    const startWatching = async () => {
        try {
           await requestForegroundPermissionsAsync()
         const sub = await watchPositionAsync({
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval:10
          },
          callback )
          setSubscriber(sub)
         
        } catch (e) {
          setErr(e);
        }
      };

     useEffect(() => {
   
         shouldTrack ?  startWatching() : subscriber.remove(); setSubscriber(null)

        
     }, [shouldTrack])


      return [Err]
}