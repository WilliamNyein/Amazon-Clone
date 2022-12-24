import Header from './Header/Header';
import './App.css';
import Home from './Home/Home';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js' 
import StripeContainer from './StripeContainer';
import Orders from './Orders/Orders';

const promise = loadStripe('pk_test_51MFUNXJJYMTt2pJ2VliAYYXFmH7STk4cC39gioKs3bU8VonwEUwQ4plnkGcQLIKV2xiF6iD4rjKbI1zlGPA1cp4y001qgVxjVe');


function App() {
  const [{user},dispatch] = useStateValue();

  useEffect(()=>{
    onAuthStateChanged(auth,(authUser)=>{
      if(authUser){
        //set user
        dispatch({
          type:'Set_user',
          user:authUser
        })
      }else{
        //unset user
        dispatch({
          type:'Unset_user',
          user:null
        })
      }
    })
  },[])
  console.log(user)

  return (
    <Router>
    <div className="App">
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/payment' element={<StripeContainer/>} />
    <Route path='/orders' element={<Orders/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
