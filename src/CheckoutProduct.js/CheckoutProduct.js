import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider'

function CheckoutProduct() {
  const [{basket},dispatch] = useStateValue();
  
  const removeFromBasket = (id)=>{
    dispatch({
      type:'Remove_from_Basket',
      id
    })
  }
  return (
    <div className='product'>
        <div className='checkout-image'>
    <img  src='https://static-prod.adweek.com/wp-content/uploads/2022/06/july-prime-day-2022.jpg' />
      </div>
      <div className='left'>
        <p>
            Awasome book should try this one
            </p>
        <small className='checkout-price'>
            $300
        </small>
    <p className='rating'>***</p>
    <button>Remove from the basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
