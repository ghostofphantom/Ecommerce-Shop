import React, { useEffect } from 'react'
import image from '../assets/images/banner.png'
import Aos from 'aos'
import 'aos/dist/aos.css';






function Banner() {

  useEffect(() => {
        Aos.init({
          delay: 35,
        })

  },[])


  return (
    <div data-aos="zoom-out" className='banner'>
        <img src={image} alt="" />
    </div>
  )
}

export default Banner