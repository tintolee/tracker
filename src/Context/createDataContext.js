import React, {useReducer} from 'react'


//defaultValue is the initial state
export default (reducer,actions,defaultValue) =>{
const Context = React.createContext()

const Provider =({children}) =>{
 const [state, dispatch] = useReducer(reducer, defaultValue)


 const boundActions={}
 for (let key in actions){
     boundActions[key]= actions[key](dispatch)
 }

 return(
     <Context.Provider value={{  state, ...boundActions}}>
         {children}
     </Context.Provider>
 )
}


return{ Context,Provider}

}



