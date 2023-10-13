import React from 'react'
import { useState } from 'react';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import PaypalLogo from '../images/paypal_icon.png'
import { WalletIcon } from '@heroicons/react/24/solid';
export default function Payment({orderData, setOrderData}) {
    
  return (
    <>
      <div className='mb-2 font-bold'>
      <form className='gap-3' action="/action_page.php">
        <div className='flex justify-between rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  mb-2'>  
        <label className='flex gap-1' htmlFor="vehicle1"><WalletIcon className='w-6'/> My Wallet</label>
        <input
          className=""
          type="checkbox"
          name="vehicle1"
          value="Paypal"
          onChange={(e) =>
            setOrderData({ ...orderData, payment_type: e.target.value })
          }
        />
        </div>
        <div className='flex justify-between rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  mb-2'>  
        <label className='flex gap-1' htmlFor="vehicle1"><img src={PaypalLogo} alt="paypal_logo" className='w-6' /> Paypal</label>
        <input
          className=""
          type="checkbox"
          name="vehicle1"
          value="Paypal"
          onChange={(e) =>
            setOrderData({ ...orderData, payment_type: e.target.value })
          }
        />
        </div>
        <div className='flex justify-between rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  mb-2'>  
        <label className='flex gap-1' htmlFor="vehicle1"><img src={PaypalLogo} alt="paypal_logo" className='w-6' /> Paypal</label>
        <input
          className=""
          type="checkbox"
          name="vehicle1"
          value="paypa"
          onChange={(e) =>
            setOrderData({ ...orderData, payment_type: e.target.value })
          }
        />
        </div>
      </form>
      </div>
    </>
  );
}
