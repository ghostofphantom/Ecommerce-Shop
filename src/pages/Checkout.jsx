import React from 'react'
import img from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Checkout() {
  return (
   <header>
    <div className="logo">
      <Link to="/">  <img src={img} alt="Kinari" /> </Link>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="paynow">
            <h2>Contact</h2>
            <input type="email" className="form-control" placeholder="Email or mobile phone number" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="silversec">
            <h1>Total</h1>
          </div>
        </div>
      </div>
    </div>
   </header>
   
  )
}

export default Checkout