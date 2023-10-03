import React from 'react'
import { useState } from 'react';

function  ReceiverInfo( {orderData, setOrderData}) {
    return(
      <div className='flex p-4 justify-between content-center items-center' >
      <div className="w-screen">
      <form  className="rounded-lg">
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="name"
          >
            Receiver Name
          </label>
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="name"
            name='name'
            type="text"
            placeholder="Jhon Smith"
            value={orderData.receiver_name}
            onChange={(e) => setOrderData({...orderData, receiver_name: e.target.value})}
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
            value={orderData.receiver_phone}
            onChange={(e) => setOrderData({...orderData, receiver_phone: e.target.value})}
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
            value={orderData.receiver_email}
            onChange={(e) => setOrderData({...orderData, receiver_email: e.target.value})}
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
            value={orderData.receiver_city}
            onChange={(e) => setOrderData({...orderData, receiver_city: e.target.value})}
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
            value={orderData.receiver_address}
            onChange={(e) => setOrderData({...orderData, receiver_address: e.target.value})}
          />
        </div>
       

      </form>
    </div>
    </div>
    )
}

export default  ReceiverInfo;