import React from 'react'
import img from '../assets/Cart.png'


function Cart() {
  return (
   <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="checkout">
          <img className='cart.img' src={img} alt="" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="description">
          <p>Midnight Petals Linen 2pc</p>
          <p>Rs.3,495.00</p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Cart