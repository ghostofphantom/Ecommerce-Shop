import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/image.png'



function Cards() {
  return (
    
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <img className='image1' src={image} alt="Product 1" />
                <p>Windi Floral Lawn 2pc</p>
                <p>Rs.2,495.00 </p>
            </div>
        </div>
    </div>
)
}

export default Cards