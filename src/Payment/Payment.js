import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from '../CheckoutProduct.js/CheckoutProduct';
import './Payment.css'
import {
    CardElement,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';

import { disableNetwork } from 'firebase/firestore';
import axios from 'axios'
import { getBasketTotal } from '../reducer';
import { db } from '../firebase';
import { doc,setDoc } from 'firebase/firestore';

function Payment() {
    const [{basket,user}, dispatch] = useStateValue();
    const [disabled,setDisabled] = useState(true);
    const [Erro,setError] = useState('')
    const [success,setSuccess] = useState(false)
    const [processing,setProcessing] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const history = useNavigate()


     const handleChange = (e)=>{
        setDisabled(e.empty)
        setError(e.error ? e.error.message : '')
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
     
        setProcessing(true);
       
        const {error,paymentMethod} = await stripe.createPaymentMethod(
           { type:"card",
            card:elements.getElement(CardElement)
    });

        if(!error){
            try{
                const {id} = paymentMethod
                const response = await axios.post('http://127.0.0.1:5001/clone-39f8e/us-central1/api/payment',{
                    amount:1000,
                    id
                })
                if(response.data.success){
                    const docRef = doc(db,'users',user?.uid,'orders',
                    id)
                    setDoc(docRef,{
                        basket:basket,
                        amount:response.data.amount,
                        created:response.data.success
                    });

                    console.log(response.data.message)
                    setSuccess(true)
                    setProcessing(false)
                    setDisabled(false)
                    dispatch({
                        type:"EMPTY_BASKET"
                    })
                    history('/orders')
                }
            }catch(err){
                console.log("Error",err)
            }
        }else{
            console.log(error.message)
        }};

  return (
    <div className='payment'>
        <div className='payment-container'>
            <h1>
                Checkout(<Link to='/checkout'>
                {basket.length}
                </Link>)
            </h1>

            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Dilevery Address</h3>
                </div>
                <div className='payment-address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, LA</p>
                </div>
            </div>

            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Review Items and Delievery</h3>
                </div>

                <div className='payment-items'>
                    <CheckoutProduct/>
                    <CheckoutProduct/>
                </div>
            </div>

            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment-detail'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment-priceContainer'>
                            <h3>Order Total:<small>$10</small></h3>
                        
                        <button disabled={processing|| disabled||
                        success}>
                            <span>{processing?<p>Processing</p>:
                            'BuyNow'}</span>
                        </button>
                        </div>
                        {Error&&<div>{Error}</div>}
                    </form>

                </div>
            </div>
        </div>
      </div>
    
  )
}

export default Payment
