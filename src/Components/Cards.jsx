import React, { useEffect } from 'react'
// import image from '../assets/image2.png'
// import img from '../assets/image2.png'
import { products } from '../data';
// import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Cards() {

       useEffect(() => {
            AOS.init({
                offset: 400,
            });
       },[])

  return (
    
    <div className="container">
        <div className="row">
            {products.map( (item) => (
                <div data-aos="fade-down" key={item.id} className="col-md-3">
                <div className="productInner">
                    <span className="onsale">OnSale</span>
                <img className='image1' src={item.img} alt="Product 1" />
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