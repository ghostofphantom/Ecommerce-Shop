import React, { useContext, useEffect } from 'react'
// import image from '../assets/image2.png'
// import img from '../assets/image2.png'
import { products } from '../data';
// import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router';
import { cartContext } from '../context/createContext';
function Cards() {

   const {dispatch} = useContext(cartContext)

    //    useEffect(() => {
    //         AOS.init({
    //             offset: 420,
    //         });
    //    },[])


  return (
    
    <div className="container">
        <div className="row">
            {products.map( (item) => (
                <div key={item.id} className="col-md-3">
                <div className="productInner">
                    <span className="onsale">OnSale</span>
                <div className="produc___outer">
                    <Link to={`products/${item.id}`}><img className='image1' src={item.img} alt="Product 1" /></Link>
                </div>
                <p> {item.product_title} </p>
                <button type='add_to_cart' onClick={ () => dispatch({ type:"add" , product: item})} >Rs {item.price} </button>
                </div>
            </div>
            ) )}
            
           
        </div>
    </div>
)
}
export default Cards