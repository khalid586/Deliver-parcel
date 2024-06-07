import React, { useContext, useEffect, useState } from 'react'
import Title from '../Components/Title'
import { UserContext } from '../Providers/UserProvider'
import Spinner from '../Components/Spinner';
import { Link } from 'react-router-dom';


function Homepage() {
  const {currUser,fetching} = useContext(UserContext);
  const [role,setRole] = useState('null'); 
  console.log(role)
   

  useEffect(()=>{  
    if(!fetching ){
      setRole(currUser.role)
      console.log(role)
    }
  },[fetching]) 

  return (
    <div>
      <Title title = "Deliver | Home"></Title> 
      <div className="min-h-screen bg-gray-100">
        <header className="text-center py-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-extrabold">Deliver</h1>
            <p className="text-2xl mt-4">Welcome to the Future of Parcel Delivery</p>
            <div className="mt-6">
              <img 
                src="https://i.ibb.co/MstwFy4/pikaso-texttoimage-cartoon-delivery-man.jpg" 
                alt="Delivery Person" 
                className="mx-auto w-64 h-auto rounded-full border-4 border-white shadow-lg" 
              />
            </div>
            <h2 className="text-3xl font-semibold mt-8">Efficient. Reliable. Convenient.</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg">
              With Your App Name, sending and receiving parcels has never been easier. Whether it's across the street or across the country, we've got you covered.
            </p>
          </div>
        </header>
        

        <section className="py-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-lg">Our network of couriers ensures speedy delivery to your doorstep.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
                <p className="text-lg">Stay updated on the status of your parcel with our live tracking feature.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Secure</h3>
                <p className="text-lg">Your parcels are handled with care and delivered safely to their destination.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-lg">Need assistance? Our customer support team is available around the clock to help you.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-10 bg-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Book Your Delivery</h3>
                <p className="text-lg">Simply enter the pickup and delivery details.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Track Your Parcel</h3>
                <p className="text-lg">Monitor your parcel's journey in real-time.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Receive Your Parcel</h3>
                <p className="text-lg">Enjoy hassle-free delivery right to your doorstep.</p>
              </div>
            </div>
          </div>
        </section>

        
        
        <section className="py-10 bg-gray- bg-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Thousands of Satisfied Customers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="User" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold">Alice Johnson</h3>
                      <p className="text-gray-600">New York, NY</p>
                    </div>
                  </div>
                  <p className="text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus faucibus nisl, vitae efficitur libero maximus ut."</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="User" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold">John Smith</h3>
                      <p className="text-gray-600">Los Angeles, CA</p>
                    </div>
                  </div>
                  <p className="text-lg">"Vivamus sed odio vitae tortor convallis feugiat sit amet et justo. Ut congue arcu eu metus dictum, nec scelerisque nisi tempus."</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="User" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold">Emily Davis</h3>
                      <p className="text-gray-600">Chicago, IL</p>
                    </div>
                  </div>
                  <p className="text-lg">"Aliquam erat volutpat. Vivamus eu dolor at ipsum lacinia scelerisque. Nullam euismod, eros et luctus vestibulum."</p>
                </div>
              </div>
            </div>
          </section>

          <section className='flex justify-center'>
          {
            (role === 'null' || role === 'user') &&
            <Link to = "/place_order" className='font-semibold px-4 py-2 rounded-xl hover:shadow-lg text-white bg-green-500'>
              Place an order
            </Link>
          }
          </section>
      </div>
    </div>
  )
}

export default Homepage