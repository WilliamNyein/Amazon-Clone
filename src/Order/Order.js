import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from '../CheckoutProduct.js/CheckoutProduct'


function Order({order}) {
  return (
    <div className='order'>
      <h1>Order</h1>
      <p>
        {moment.unix(order.data.created).format('MMMM Do YYYY,h:mma')}
      </p>
      <p className='order_id'>
        <small>{order.id}</small>
      </p>
      <CheckoutProduct />
      <div className='total'>
        <h1>Total : 1000$</h1>
      </div>
    </div>
  )
}

export default Order
