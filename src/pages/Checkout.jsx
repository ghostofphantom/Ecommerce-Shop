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
           <div className="formBox">
             <input type="email" className="form-control" placeholder="Email or mobile phone number" />
           </div>
           <div className="formBox">
             <input type="checkbox" className='me-2 mt-3'/>
             <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
           </div>
           <div className="formBox mt-3">
             <select className='form-control'>
              <option value="Pakistan">Pakistan</option>
              <option value="Pakistan">Pakistan2</option>
              <option value="Pakistan">Pakistan3</option>
              <option value="Pakistan">Pakistan4</option>
             </select>
           </div>
           <div className="formBox d-flex mt-3">
             <input type="text" className='form-control me-4' placeholder='First Name'  />
             <input type="text" className='form-control ' placeholder='Last Name'  />
           </div>
           
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