import React from 'react'
import { View, Text, Button } from 'react-native'

export default function TrackListScreen({navigation}) {
    return (
        <View>
            <Text>Track List screen</Text>
            <Button     title='Go to track detail' 
            onPress={()=>navigation.navigate('TrackDetail')}/>
        </View>
    )
}
