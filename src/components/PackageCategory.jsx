import React from 'react'
import { useState } from 'react';

function PackageInfo( {formData, setFormData}) {
    return (
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <form className="rounded-lg">
            <div className="mb-4">
              <label className="block mb-2" htmlFor="category">
                Package Category
              </label>
              <select
                id="category"
                className=" rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.package_category}
                onChange={(e) =>
                  setFormData({ ...formData, package_category: e.target.value })
                }
              >
                <option selected>Category</option>
                <option value="ELE">Electronic</option>
                <option value="CA">Cloth</option>
                <option value="FR">Food</option>
                <option value="DE">Car Part</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block   mb-2" htmlFor="Weight">
                Weight
              </label>
              <input id="Weight"
                placeholder='Kilograms' type='number'
                className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.package_weight}
                onChange={(e) =>
                  setFormData({ ...formData, package_weight: e.target.value })
                } />
            </div>
            <div className="mb-4">
              <label className="block   mb-2" htmlFor="dimensions">
                Dimensions
              </label>
              <div className='flex items-center content-center'>

              <input
                className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="dimensions"
                name="dimensions"
                placeholder="Length"
                value={formData.package_demesions}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                />
                                <span className='focus:ring-blue-500 focus:border-blue-500 p-3.5 dark:bg-gray-600 dark:border-gray-600 rounded-r-lg dark:placeholder-gray-400 dark:text-zinc-300 font-bold text-xs dark:focus:ring-blue-500 dark:focus:border-blue-500'>Cm</span>

              <input
                className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="dimensions"
                name="dimensions"
                placeholder="Width"
                value={formData.package_demesions}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                />
                                <span className='focus:ring-blue-500 focus:border-blue-500 p-3.5 dark:bg-gray-600 dark:border-gray-600 rounded-r-lg dark:placeholder-gray-400 dark:text-zinc-300 font-bold text-xs dark:focus:ring-blue-500 dark:focus:border-blue-500'>Cm</span>
              <input
                className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="dimensions"
                name="dimensions"
                placeholder="Height"
                value={formData.package_demesions}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                />
                                <span className='focus:ring-blue-500 focus:border-blue-500 p-3.5 dark:bg-gray-600 dark:border-gray-600 rounded-r-lg dark:placeholder-gray-400 dark:text-zinc-300 font-bold text-xs dark:focus:ring-blue-500 dark:focus:border-blue-500'>Cm</span>


                </div>
            </div>
            <div className="mb-4">
              <label className="block   mb-2" htmlFor="city">
                city
              </label>
              <input
                className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="city"
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block   mb-2" htmlFor="address">
                Address Detail
              </label>
              <input
                className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
          </form>
        </div>
      </div>
    );
}

export default PackageInfo;