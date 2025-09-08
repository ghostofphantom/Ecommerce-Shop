import React from 'react'
import img from '../assets/Cart.png'



function Cart() {
  return (
   <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="checkout">
          <img className='cart.img' src={img} alt="" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="description">
          <p>Midnight Petals Linen 2pc</p>
          <p>Rs.3,495.00</p>
          <button className='Checkout'> ADD TO CART </button>
          <button className='Buynow'> BUY IT NOW </button>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Cart