import React , {useContext}from 'react'
import { FlatList,TouchableOpacity} from 'react-native'
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext} from '../Context/TrackContext'
import { ListItem , Text} from 'react-native-elements'


export default function TrackListScreen({navigation}) {
const {state,fetchTracks} = useContext(TrackContext)
       
   console.log(state);
    return (
        <>

        {state.length === 0 ? <Text h4> No Tracks, click on Add Track below to create Tracks</Text> : null}
        <NavigationEvents onWillFocus={()=>fetchTracks()}/>
           
            <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('TrackDetail', {_id: item._id}) }>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    
        </>
    )
}


TrackListScreen.navigationOptions= {
    title: 'Tracks'
}