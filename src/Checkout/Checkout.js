import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from '../CheckoutProduct.js/CheckoutProduct'


function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img src='https://static-prod.adweek.com/wp-content/uploads/2022/06/july-prime-day-2022.jpg' />
         <h1 className='title'>Your shopping Basket</h1>
         <CheckoutProduct/>
      </div>

      <div className='checkout-right'>
        <Subtotal/>
        
      </div>
    </div>
  )
}

export default Checkout
