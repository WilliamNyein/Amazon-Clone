import React,{useState,useEffect} from 'react'
import { useStateValue } from '../StateProvider'
import {collection,query,orderBy, getDocs} from 'firebase/firestore'
import { db } from '../firebase'
import Order from '../Order/Order'
import './Orders.css'

function Orders() {
  const [{user},dispatch] = useStateValue();
  const [orders,setOrders] = useState([])
  useEffect(()=>{
    if(user){
      const orderSet = async()=>{
      const ordersRef = collection(db,'users',user?.uid,'orders')
      const q = query(ordersRef,orderBy('created','desc'))
      const querySnapshot = await getDocs(q)
      console.log('querysnap',querySnapshot)
      querySnapshot.forEach((docs)=>{
        setOrders([...orders,{id:docs.id,data:docs.data()}])
      })}
      orderSet();
    
    }
    else{
      setOrders([])
    
    }
  },[user])

  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders__order'>
        {orders?.map((order)=>(
          <Order key={order.id} order={order}/>
        ))}
      </div>
      
    </div>
  )
}

export default Orders
