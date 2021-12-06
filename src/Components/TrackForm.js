import React , {useContext} from 'react'
import { Button,Input } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../Context/LocationContext'




export default function TrackForm() {


    const {state: {name,recording,locations},startRecording, stopRecording, changeName} = useContext(LocationContext)

   
    return (
        <>
        <Spacer>
            <Input  placeholder='Enter Name' value={name}  onChangeText={changeName}/>
            </Spacer>
            <Spacer>
            {recording ? <Button  title='Stop'  onPress={stopRecording}/> : <Button title=' Start Recording'  onPress={startRecording}/> }
            </Spacer>
              <Spacer>
            {!recording && locations.length ? <Button title='Save recording'/> : null}
            </Spacer> 
        </>
    )
}


