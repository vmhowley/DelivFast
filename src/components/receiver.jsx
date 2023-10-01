import React from 'react'
import { useState } from 'react';

function ReceiverInfo( {formData, setFormData}) {
    return(
    <div className='flex justify-center' >
    <div className="w-full max-w-md">
      <form  className="rounded-lg">
        <div className="mb-4">
          <label
            className="block font-bold mb-2"
            htmlFor="name"
          >
            Receiver Name
          </label>
          <input
            className="shadow appearance-none  rounded-lg w-full py-4 px-3    leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
            id="name"
            name='name'
            type="text"
            placeholder="Jhon Smith"
            value={formData.receivername}
            onChange={(e) => setFormData({...formData, receivername: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold mb-2"
            htmlFor="name"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none  rounded-lg w-full py-4 px-3    leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
            id="phone"
            name='phone'
            type="tel"
            placeholder="+1"
            value={formData.receiverphone}
            onChange={(e) => setFormData({...formData, receiverphone: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none  rounded-lg w-full py-4 px-3    leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
            id="email"
            name='email'
            type="text"
            placeholder="Email"
            value={formData.receiveremail}
            onChange={(e) => setFormData({...formData, receiveremail: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold mb-2"
            htmlFor="city"
          >
            city
          </label>
          <input
            className="shadow appearance-none  rounded-lg w-full py-4 px-3    leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
            id="city"
            name='city'
            type="text"
            placeholder="City"
            value={formData.receivercity}
            onChange={(e) => setFormData({...formData, receivercity: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold mb-2"
            htmlFor="address"
          >
            Address Detail
          </label>
          <input
            className="shadow appearance-none  rounded-lg w-full py-4 px-3    leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700"
            id="address"
            name='address'
            type="text"
            placeholder="Address"
            value={formData.receiveraddress}
            onChange={(e) => setFormData({...formData, receiveraddress: e.target.value})}
          />
        </div>
       

      </form>
    </div>
    </div>
    )
}

export default ReceiverInfo;