import React from 'react'
import { PencilSquareIcon, CurrencyDollarIcon, MapPinIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";


export default function Hero   () {


  return (
 <div className='flex flex-wrap  m-auto gap-4 w-96  font-semibold'>
        <Link to='create-order' className='transition-transform transform hover:scale-110    h-[126px] w-[183px] grid justify-items-center content-center items-center rounded-2xl  bg-opacity-10 bg-gray-500  dark:bg-gray-800'>
        <div className='p-4 bg-emerald-200 bg-opacity-60  rounded-full'>
        <PencilSquareIcon className=' text-emerald-400 w-[28px]' />
        </div>
          <span className=''>Make Order</span>
      </Link>

      <Link to='check_rate' className='transition-transform transform hover:scale-110    h-[126px] w-[183px] grid justify-items-center content-center items-center rounded-2xl  bg-gray-500  dark:bg-gray-800 bg-opacity-10'>

        <div className='p-4 bg-emerald-200 bg-opacity-60 rounded-full'>
        <CurrencyDollarIcon className='relative text-emerald-400 rounded-full w-[28px]' />
        </div>
          <span className=''>Check Rates</span>
      </Link>
      

      <a href='/nearbydrops' className='card transition-transform transform hover:scale-110    h-[126px] w-[183px] grid justify-items-center items-center rounded-2xl  bg-gray-500  dark:bg-gray-800 bg-opacity-10 content-center'>
        <div className='p-4 bg-emerald-200 bg-opacity-60 rounded-full'>
        <MapPinIcon className='relative text-emerald-400 rounded-full w-[28px]' />
        </div>
          <span className=''>Nearby Drops</span>
      </a>
      <a href='/help' className='card transition-transform transform hover:scale-110    h-[126px] w-[183px] grid justify-items-center items-center rounded-2xl  bg-gray-500  dark:bg-gray-800 bg-opacity-10 content-center'>
        <div className='p-4 bg-emerald-200 bg-opacity-60 rounded-full'>
        <QuestionMarkCircleIcon className='relative text-emerald-400 rounded-full w-[28px] ' />
        </div>
          <span className=''>Help Center</span>
      </a>
    </div>
   
  )
}
