import React from 'react'
import Banner from  '../Icons/Banner.jpg'
import './Home.css'
import Product from '../Product/Product'


function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
      <img src={Banner} className='banner-img'/>

      <div className='home-row'>
        <Product/>
        <Product/>
     </div>

     <div className='home-row'>
        <Product/>
        <Product/>
        <Product/>
     </div>

     <div className='home-row'>
        <Product/>
     </div>
      </div>
</div>

  )
}

export default Home
