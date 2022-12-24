import Payment from './Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js' 


const promise = loadStripe('pk_test_51MFUNXJJYMTt2pJ2VliAYYXFmH7STk4cC39gioKs3bU8VonwEUwQ4plnkGcQLIKV2xiF6iD4rjKbI1zlGPA1cp4y001qgVxjVe');


function StripeContainer() {
  return (
    <Elements stripe={promise}>
    <Payment/>
  </Elements>
  )
}

export default StripeContainer
