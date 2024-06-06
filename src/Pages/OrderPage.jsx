import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function OrderPage() {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setEmail(user.email);
    }
  }, [user]);

  const [currentDate, setCurrentDate] = useState('');
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const minYear = tomorrow.getFullYear();
    const minMonth = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const minDay = String(tomorrow.getDate()).padStart(2, '0');
    const minFormattedDate = `${minYear}-${minMonth}-${minDay}`;
    setMinDate(minFormattedDate);
  }, []);

  const [formData, setFormData] = useState({
    placedBy: {
      name: displayName,
      email: email,
    },
    orderTime: currentDate,
    deliveredBy: '',
    phoneNumber: '',
    parcelType: '',
    parcelWeight: 0,
    receiverName: '',
    receiverPhoneNumber: '',
    parcelDeliveryAddress: '',
    requestedDeliveryDate: '',
    status:'pending',
  });
  
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      placedBy: {
        name: displayName,
        email: email,
      },
      orderTime: currentDate,
    }));
  }, [displayName, email, currentDate]);

  const [price, setPrice] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'parcelWeight') {
      calculatePrice(value);
    }
  };

  const calculatePrice = (weight) => {
    let calculatedPrice = 0;
    if (weight <= 0) {
      calculatedPrice = 0;
    } else if (weight >= 0 && weight < 2) {
      calculatedPrice = 50;
    } else if (weight >= 2 && weight < 3) {
      calculatedPrice = 100;
    } else {
      calculatedPrice = 150;
    }
    setPrice(calculatedPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    axios.post('https://b9a12-server-side-khalid586.vercel.app/place_order',formData)
    .then(({data}) => {
      console.log(data)
      if(data.acknowledged){
        toast.success('parcel order plaecd successfully!')
        setTimeout(()=>{
          navigate('/my_parcels');
        },1000)
      }
    })
    
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Parcel Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Parcel Type:</label>
          <input
            type="text"
            name="parcelType"
            value={formData.parcelType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Parcel Weight (kg):</label>
          <input
            type="number"
            name="parcelWeight"
            value={formData.parcelWeight}
            onChange={handleChange}
            min = "0.1"
            step = "0.1"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Receiver’s Name:</label>
          <input
            type="text"
            name="receiverName"
            value={formData.receiverName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Receiver's Phone Number:</label>
          <input
            type="text"
            name="receiverPhoneNumber"
            value={formData.receiverPhoneNumber}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Parcel Delivery Address:</label>
          <input
            type="text"
            name="parcelDeliveryAddress"
            value={formData.parcelDeliveryAddress}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Current Date:</label>
          <input
            type="text"
            value={currentDate}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Requested Delivery Date:</label>
          <input
            type="date"
            name="requestedDeliveryDate"
            value={formData.requestedDeliveryDate}
            onChange={handleChange}
            min={minDate}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Price:</label>
          <input
            type="text"
            value={`${price} Tk`}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default OrderPage;
