import React, { useEffect, useState } from 'react'
import OrderPage from './OrderPage'
import Title from '../Components/Title'
import { Helmet } from 'react-helmet'
import axios from 'axios'

function Homepage() {
  const [data,setData] = useState('');
  useEffect(()=>{
    try{
        async function a(){
          const {data} = await axios.get('http://localhost:5007')
          setData(data);
        }a();
    }catch(error){
      console.log(error)
    }
  },[])
  return (
    <div>
      <Title title = "Deliver | Home"></Title>
      <p>{data}</p>
    </div>
  )
}

export default Homepage