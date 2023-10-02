import React from 'react'
import { useState } from 'react';

function  ReceiverInfo( {formData, setFormData}) {
    return(
    <div className='flex justify-center' >
    <div className="w-full max-w-md">
      <form  className="rounded-lg">
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="name"
          >
            Sender Name
          </label>
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="name"
            name='name'
            type="text"
            placeholder="Jhon Smith"
            value={formData.receiver_name}
            onChange={(e) => setFormData({...formData, receiver_name: e.target.value})}
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
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="phone"
            name='phone'
            type="tel"
            placeholder="+1"
            value={formData.receiver_phone}
            onChange={(e) => setFormData({...formData, receiver_phone: e.target.value})}
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
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="email"
            name='email'
            type="text"
            placeholder="Email"
            value={formData.receiver_email}
            onChange={(e) => setFormData({...formData, receiver_email: e.target.value})}
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
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="city"
            name='city'
            type="text"
            placeholder="City"
            value={formData.receiver_city}
            onChange={(e) => setFormData({...formData, receiver_city: e.target.value})}
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
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="address"
            name='address'
            type="text"
            placeholder="Address"
            value={formData.receiver_address}
            onChange={(e) => setFormData({...formData, receiver_address: e.target.value})}
          />
        </div>
       

      </form>
    </div>
    </div>
    )
}

export default  ReceiverInfo;