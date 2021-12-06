import React from 'react'
import { Button,Input } from 'react-native-elements'
import Spacer from './Spacer'





export default function TrackForm() {
    return (
        <>
        <Spacer>
            <Input  placeholder='Enter Name'/>
            </Spacer>
            <Button title=' start recording'/>
        </>
    )
}


