import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='font-custom'>
      <div className='md:mx-12 lg:mx-20'>
        <Navbar></Navbar>
          <div className='min-h-[80vh]'>
              <Outlet></Outlet>
          </div>
      </div>
        <Footer></Footer>
    </div>
  )
  
}

export default Root