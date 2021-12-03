import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Spacer({children}) {
    return (
        <View styles={styles.spacer}>
            {children}
        </View>
    )
}




const styles= StyleSheet.create({

spacer:{
    margin:30,
   
}

})