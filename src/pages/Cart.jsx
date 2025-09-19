import React, { useContext } from 'react';
// import { useParams } from 'react-router';
import { cartContext } from '../context/createContext';

function Cart() {
  // const { img, product_title } = useParams(); 
const {cart} = useContext(cartContext)

  return (
    <div className="container">
      {
        cart.length === 0 ? (
          <span className='Emptycart'> Your Cart Is Empty </span>
        ) : (
          cart.map((item) => (
             <div className="row">
        <div className="col-md-7">
          <div className="checkout">
            <img className="cart-img img-fluid" src={item.img} alt={item.product_title} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="description">
            <p>{item.product_title}</p>
            <p>Rs. {item.price} </p>
            <button className="Checkout">ADD TO CART</button>
            <button className="Buynow">BUY IT NOW</button>
            <p className="lowerContent">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
          ))
        )
      }
     
    </div>
  )
}

export default Cart
