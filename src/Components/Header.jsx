import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../App.css'; 
import logo from '../assets/logo.png';
import Cart from '../pages/Cart.jsx'
import { cartContext } from '../context/createContext.jsx';
import { Link } from 'react-router';

  
  function Header() {

    const {cart} = useContext(cartContext)

    return (
    <header>
      
      <div className="top-notification">
        <p className='exchangepolicy'>7-DAYS HASSLE FREE RETURN AND EXCHANGE POLICY!</p>
      </div>

      <div className="header-main">
        <div className="logo">
        <Link to="/">  <img src={logo} alt="Kinari" /> </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">NEW ARRIVALS</a></li>
            <li><a href="#">SALE</a></li>
            <li><a href="#">PURE CHARMEUSE SILK</a></li>
            <li><a href="#">CHIFFON COLLECTION</a></li>
          </ul>
        </nav>

        <div className="header-right">
          <ul className="user-actions">
            <li><a href="#">ACCOUNT</a></li>
            <li><a href="#">SEARCH</a></li>
            <li><Link to="/cart" > CART ( {cart.length} ) </Link>  </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

  export default Header
   
