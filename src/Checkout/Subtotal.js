import React from 'react'
import './Subtotal.css'
import { useNavigate } from 'react-router-dom'

function Subtotal() {
  const history = useNavigate();
  return (
    <div className='subtotal'>
        <p>
            Subtotal(0 itmems):<strong>$0</strong>
        </p>
        <small className='checkbox'>
    
            <input type='checkbox'/>
            This order contains a gift
        
        </small>
        <button onClick={()=>history('/payment')}>Proceed to Checkout</button>
    
    </div>
  )
}



export default Subtotal
