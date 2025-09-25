import React from 'react'
import img from '../assets/logo.png'
import { Link } from 'react-router-dom';
import img2 from '../assets/image.png'

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
             <input type="email" className='form-control mt-3'   placeholder="Email or mobile phone number" />
           </div>
           <div className="formBox">
             <input type="checkbox" className='me-2 mt-3'/>
             <span>Email me with news and offers</span>
           </div>
           <div className="formBox mt-2">
            <h2 className='mt-3 '>Delivery</h2>
             <select className='form-control mt-3 '>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Turkiye">Turkiye</option>
             </select>
           </div>
           <div className="formBox d-flex mt-4">
             <input type="text" className='form-control me-2' placeholder='First Name'  />
             <input type="text" className='form-control ' placeholder='Last Name'  />
           </div>
           <div className="address">
          <input type="text" className='form-control mt-4' placeholder='Address'     />
          <button className='btn btn-primary mt-4 '>Submit</button>
           </div>
           
          </div>
        </div>
        <div className="col-md-6">
          <div className="silversec">
            <img className='img2' src={img2} alt="Checkout.image" />
            <h3 className='txt'>Teal Mirage Linen 2pc</h3>
            <h3 className='txt2'>Rs. 3,499</h3>
            </div>
            <div className="sub">
              <h4 className='sub2'>Subtotal Rs 3,495.00 </h4>
              <h4 className='sub3'>Shipping Rs 185.00</h4>
              <h4 className='Total'>Total PKR Rs 3,680.00</h4>
            </div>
          </div>
        </div>
      </div>
   </header>
   
  )
}

export default Checkout