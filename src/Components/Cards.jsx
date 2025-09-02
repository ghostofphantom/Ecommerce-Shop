import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/image.png'
import img from '../assets/image2.png'
import { products } from '../data';
import { Link } from 'react-router';

function Cards() {
  return (
    
    <div className="container">
        <div className="row">
            {products.map( (item) => (
                <div key={item.id} className="col-md-3">
                <div className="producInner">
                    <span className="onsale">OnSale</span>
                <img className='image1' src={image} alt="Product 1" />
                <p> {item.product_title} </p>
                <button>Rs {item.price} </button>
                </div>
            </div>
            ) )}
            
           
        </div>
    </div>
)
}

export default Cards