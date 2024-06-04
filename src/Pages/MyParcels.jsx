import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import axios from 'axios';
import Title from '../Components/Title';
import Orders from '../Components/Orders';

function Myparcels() {
  const {user} = useContext(AuthContext);
  const [orders,setOrders] = useState([]);


  useEffect(()=>{
      if(user){
        const userData = {
          name:user.displayName,
          email:user.email,
        }
        axios.get('http://localhost:5007/orders',{
          params:userData
        }).then(({data}) => setOrders(data))
      }
  },[])

  return (
    <div>
      <Title title="Deliver | Orders"></Title>
      <h1 className='text-center text-4xl m-8 mb-16 font-bold underline'>My Orders</h1>

      {
        orders.length ? <Orders orders = {orders}></Orders> : (<div className='text-center text-xl font-semibold text-red-500'>You don't have any orders</div>)
      }

    </div>
  )
}

export default Myparcels