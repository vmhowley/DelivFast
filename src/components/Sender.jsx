import React from 'react'
import { useState } from 'react';

function SenderInfo( {formData, setFormData}) {
    return(
    <div className='flex p-4 justify-between content-center items-center' >
    <div className="w-screen">
      <form  className="rounded-lg ">
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="name"
          >
            Sender Name
          </label>
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="name"
            name='name'
            type="text"
            placeholder="Jhon Smith"
            value={formData.sender_name}
            onChange={(e) => setFormData({...formData, sender_name: e.target.value})}
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
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="phone"
            name='phone'
            type="tel"
            placeholder="+1"
            value={formData.sender_phone}
            onChange={(e) => setFormData({...formData, sender_phone: e.target.value})}
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
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="email"
            name='email'
            type="text"
            placeholder="Email"
            value={formData.sender_email}
            onChange={(e) => setFormData({...formData, sender_email: e.target.value})}
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
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="city"
            name='city'
            type="text"
            placeholder="City"
            value={formData.sender_city}
            onChange={(e) => setFormData({...formData, sender_city: e.target.value})}
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
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="address"
            name='address'
            type="text"
            placeholder="Address"
            value={formData.sender_address}
            onChange={(e) => setFormData({...formData, sender_address: e.target.value})}
          />
        </div>
       

      </form>
    </div>
    </div>
    )
}

export default SenderInfo;