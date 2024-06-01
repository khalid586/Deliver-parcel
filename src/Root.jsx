import React from 'react'
// import Footer from './Components/Footer'
// import Banner from './Components/Banner'
// import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='font-custom'>
        {/* <Navbar></Navbar>
            <div className='min-h-[90vh]'>
                <Outlet></Outlet>
            </div>
        <Footer></Footer> */}
        <Outlet></Outlet>
    </div>
  )
  
}

export default Root