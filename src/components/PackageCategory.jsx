import React from 'react'
import { useState } from 'react';

function PackageInfo( {formData, setFormData}) {
    return(
    <div className='flex justify-center' >
    <div className="w-full max-w-md">
      <form  className="rounded-lg">
        <div className="mb-4">
          <label
            className="block font-bold mb-2"
            htmlFor="name"
          >
            Package Category
          </label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Category</option>
  <option value="ELE">Electronic</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
        </div>
        <div className="mb-4">
          <label
            className="block font-bold mb-2"
            htmlFor="weight"
          >
            Weight
          </label>
          <input
            className="shadow appearance-none  rounded-lg w-full py-4 px-3    leading-tight focus:outline-none focus:shadow-outline bg-opacity-70 bg-gray-700 placeholder:flex placeholder:justify-between"
            id="phone"
            name='phone'
            type="number"
            placeholder='kg'
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          
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
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
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
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
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
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
        </div>
       

      </form>
    </div>
    </div>
    )
}

export default PackageInfo;