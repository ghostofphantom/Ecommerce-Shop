import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../App.css'; 
import logo from '../assets/logo.png';

  
  function Header() {
    return (
    <header>
      
      <div className="top-notification">
        <p>7-DAYS HASSLE FREE RETURN AND EXCHANGE POLICY!</p>
      </div>

      <div className="header-main">
        <div className="logo">
          <img src={logo} alt="Kinari" />
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
            <li><a href="#">CART (0) </a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

  export default Header
   
