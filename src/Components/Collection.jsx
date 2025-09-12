import React from 'react';
import img from '../assets/images/image.png';
import img2 from '../assets/images/image copy.png';
import img3 from '../assets/images/image copy 2.png';
import '../App.css'; 

function Collection() {
  return (
    <div className="collection-container">
      <div className="collection-card" style={{ backgroundImage: `url(${img})` }}>
        <h2>FLORAL LINEN</h2>
        <button>VIEW PRODUCTS</button>
      </div>
      <div className="collection-card" style={{ backgroundImage: `url(${img2})` }}>
        <h2>NAQSH-E-ZARI LINEN</h2>
        <button>VIEW PRODUCTS</button>
      </div>
      <div className="collection-card" style={{ backgroundImage: `url(${img3})` }}>
        <h2>LINEN SHIRTS</h2>
        <button>VIEW PRODUCTS</button>
      </div>
    </div>
  );
}

export default Collection;