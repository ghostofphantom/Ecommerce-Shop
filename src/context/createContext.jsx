import React, { createContext, useReducer } from 'react'
import pic from '../assets/Cart.png'
import reduFunction from './reduFunction'

 export  const cartContext = createContext()


function CreateContext({children}) {

        const [cart , dispatch] = useReducer (reduFunction , [])


  return (
    <cartContext.Provider value={{cart , dispatch}}>
            {children}
    </cartContext.Provider>
  )
}


export default CreateContext