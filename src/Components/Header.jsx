import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../App.css'; 
import logo from '../assets/logo.png';
import { Link, Links, NavLink } from 'react-router';
import Cart from '../pages/Cart.jsx'

  
  function Header() {
    return (
    <header>
      
      <div className="top-notification">
        <p>7-DAYS HASSLE FREE RETURN AND EXCHANGE POLICY!</p>
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
            <li><Link to="/cart" > CART (0) </Link>  </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

  export default Header
   
