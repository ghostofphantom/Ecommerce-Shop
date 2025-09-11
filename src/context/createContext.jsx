import React, { createContext } from 'react'
import pic from '../assets/Cart.png'

 export  const cartContext = createContext()


function CreateContext({children}) {

        const product = <div> <img src={pic} alt="" />
        
             <p>Midnight Petals Linen 2pc</p>
          <p>Rs.3,495.00</p>
          <button className='Checkout'> ADD TO CART </button>
          <button className='Buynow'> BUY IT NOW </button>
          <p className='lowerContent'>Wear the Art You Feel Premium Linen, Unstitched for You.🎨</p>
        
        
        
        
         </div>


  return (
    <cartContext.Provider value={product}>
            {children}
    </cartContext.Provider>
  )
}


export default CreateContext