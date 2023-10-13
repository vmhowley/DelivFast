import React from 'react'
import { useState } from 'react';
import { PencilSquareIcon, CurrencyDollarIcon, MapPinIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
function PackageInfo( {orderData, setOrderData}) {
    return (
      <div className='flex p-4 justify-between content-center items-center' >
      <div className="w-screen"> 
          <form className="rounded-lg">
            <div className="mb-4">
              <label className="block mb-2" htmlFor="category">
                Package Category
              </label>
              <select
                id="category"
                className=" rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={orderData.package_category}
                onChange={(e) =>
                  setOrderData({ ...orderData, package_category: e.target.value })
                }
              >
                <option selected>Category</option>
                <option value="Electronic">Electronic</option>
                <option value="Cloth">Cloth</option>
                <option value="Food">Food</option>
                <option value="Car Part">Car Part</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block   mb-2" htmlFor="Weight">
                Weight Kg
              </label>
              <input id="Weight"
                placeholder='Kilograms' type='number'
                className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={orderData.package_weight}
                onChange={(e) =>
                  setOrderData({ ...orderData, package_weight: e.target.value })
                } />
            </div>
            <div className="mb-4">
              <label className="block   mb-2" htmlFor="dimensions">
                Dimensions
              </label>
              <div className=' flex items-center content-center'>

              <input
                className="rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="Length"
                name="Length"
                placeholder="Length"
                value={orderData.length}
                onChange={(e) =>
                  setOrderData({ ...orderData, length: e.target.value })
                }
                />
                                <span className='focus:ring-blue-500 focus:border-blue-500 p-3.5 dark:bg-gray-500 bg-gray-200 dark:border-gray-600 rounded-r-lg dark:placeholder-gray-400 dark:text-zinc-300 font-bold text-xs dark:focus:ring-blue-500 dark:focus:border-blue-500'>Cm</span>

              <input
                className="rounded-l-lg ml-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="width"
                name="Width"
                placeholder="Width"
                value={orderData.width}
                onChange={(e) =>
                  setOrderData({ ...orderData, width: e.target.value })
                }
                />
                                <span className='focus:ring-blue-500 focus:border-blue-500 p-3.5 dark:bg-gray-500 bg-gray-200 dark:border-gray-600 rounded-r-lg dark:placeholder-gray-400 dark:text-zinc-300 font-bold text-xs dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-1'>Cm</span>
              <input
                className="rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="dimensions"
                name="dimensions"
                placeholder="Height"
                value={orderData.package_demesions}
                onChange={(e) =>
                  setOrderData({ ...orderData, email: e.target.value })
                }
                />
                                <span className='focus:ring-blue-500 focus:border-blue-500 p-3.5 dark:bg-gray-500 bg-gray-200 dark:border-gray-600 rounded-r-lg dark:placeholder-gray-400 dark:text-zinc-300 font-bold text-xs dark:focus:ring-blue-500 dark:focus:border-blue-500'>Cm</span>


                </div>
            </div>
            <div className="mb-4">
              <label className="block   mb-2" htmlFor="shipping">
                Select Shipping
              </label>
              <select
                id="shipping"
                className=" rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={orderData.package_shipping}
                onChange={(e) =>
                  setOrderData({ ...orderData, package_shipping: e.target.value })
                }
              >
                <option selected>Shipping</option>
                
                <option value="ELE">Regularaa</option>
                <option value="CA">Cargo</option>
                <option value="FR">Express</option>
              </select>
            </div>
            
          </form>
        </div>
      </div>
    );
}

export default PackageInfo;