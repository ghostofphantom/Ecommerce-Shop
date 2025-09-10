import React, { useContext } from 'react'
import img from '../assets/Cart.png'
import { cartContext } from '../context/createContext'




function Cart() {
  const useCartCont = useContext(cartContext)
  return (
   <div className="container">
    <div className="row">
      <div className="col-md-7">
        <div className="checkout">
          <img className='cart.img' src={img} alt="" />
          {useCartCont}
        </div>
      </div>
      <div className="col-md-4">
        <div className="description">
          <p>Midnight Petals Linen 2pc</p>
          <p>Rs.3,495.00</p>
          <button className='Checkout'> ADD TO CART </button>
          <button className='Buynow'> BUY IT NOW </button>
          <p className='lowerContent'>Wear the Art You Feel Premium Linen, Unstitched for You.🎨</p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Cart