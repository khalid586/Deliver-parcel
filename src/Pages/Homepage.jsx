import React, { useContext, useEffect, useState } from 'react'
import OrderPage from './OrderPage'
import Title from '../Components/Title'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { UserContext } from '../Providers/UserProvider'
import Spinner from '../Components/Spinner'

function Homepage() {
  const [data,setData] = useState([]);
  const {currUser,fetching} = useContext(UserContext);

  useEffect(()=>{
    if(!fetching){
      console.log(currUser)
    }
  },[fetching])

  return (
    <div>
      <Title title = "Deliver | Home"></Title> 

    </div>
  )
}

export default Homepage