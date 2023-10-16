import React from 'react'
import { useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


function SenderInfo( {orderData, setOrderData}) {
  const latitude = localStorage.getItem('lat');
  const longitude = localStorage.getItem('lng');
  const accuracy = localStorage.getItem('acc');
  const altitudeAccuracy = localStorage.getItem('aac');
  const altitude = localStorage.getItem('alt');
  const lat = parseFloat(latitude);
  const lng = parseFloat(longitude);
  console.log(lat, lng);

  const MyMapComponent = withGoogleMap(props =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: lat, lng: lng }}
    >
      <Marker
        position={{ lat: lat, lng: lng }}
      />
    </GoogleMap>
  );
  
    return(
      
    <div className='flex p-4 justify-between content-center items-center' >
    <div className="w-screen">
    
      <form  className="rounded-lg  ">
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="name"
          >
            Sender Name
          </label>
          
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="name"
            name='name'
            type="text"
            placeholder="Jhon Smith"
            value={orderData.sender_name}
            onChange={(e) => setOrderData({...orderData, sender_name: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="name"
          >
            Phone Number
          </label>
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="phone"
            name='phone'
            type="tel"
            placeholder="+1"
            value={orderData.sender_phone}
            onChange={(e) => setOrderData({...orderData, sender_phone: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="email"
            name='email'
            type="text"
            placeholder="Email"
            value={orderData.sender_email}
            onChange={(e) => setOrderData({...orderData, sender_email: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="city"
          >
            city
          </label>
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="city"
            name='city'
            type="text"
            placeholder="City"
            value={orderData.sender_city}
            onChange={(e) => setOrderData({...orderData, sender_city: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="address"
          >
            Address Detail
          </label>
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="address"
            name='address'
            type="text"
            placeholder="Address"
            value={localStorage.getItem('address')}
            
          />
        </div>
        
        <MyMapComponent
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
/>
      </form>
    </div>
    </div>
    )
}




export default SenderInfo;
