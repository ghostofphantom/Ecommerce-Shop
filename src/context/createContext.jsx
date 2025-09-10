import React, { createContext } from 'react'


 export  const cartContext = createContext()


function CreateContext(children) {

        const product = "This prod one"


  return (
    <cartContext.Provider value={product}>
            {children}
    </cartContext.Provider>
  )
}


export default CreateContext