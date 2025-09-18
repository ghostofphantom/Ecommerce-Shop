import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { cartContext } from '../context/createContext';

function Cart() {
  const { img, product_title } = useParams(); 
  const cart = useContext(cartContext); // optional: use if needed

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="checkout">
            <img className="cart-img" src={product_title} alt={product_title} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="description">
            <p>{decodedTitle}</p>
            <p>Rs.3,495.00</p>
            <button className="Checkout">ADD TO CART</button>
            <button className="Buynow">BUY IT NOW</button>
            <p className="lowerContent">
              Wear the Art You Feel Premium Linen, Unstitched for You.🎨
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
