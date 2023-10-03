import React from 'react'
import { PencilSquareIcon, CurrencyDollarIcon, MapPinIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'


export default function Hero   () {


  return (
 <div className='flex flex-wrap m-auto gap-4 w-96  font-semibold'>
      <a href='/create-order' className='transition-transform transform hover:scale-110  border h-[126px] w-[183px] grid justify-items-center content-center items-center rounded-2xl bg-opacity-30'>
        <div className='p-4 bg-gray-100  rounded-full'>
        <PencilSquareIcon className=' text-emerald-400 w-[28px]' />
        </div>
          <span className=''>Make Order</span>
      </a>

      <a href='/checkrates' className='card transition-transform transform hover:scale-110  border h-[126px] w-[183px] grid justify-items-center items-center rounded-2xl content-center'>
        <div className='p-4 bg-gray-100 rounded-full'>
        <CurrencyDollarIcon className='relative text-emerald-400 rounded-full w-[28px]' />
        </div>
          <span className=''>Check Rates</span>
      </a>

      <a href='/nearbydrops' className='card transition-transform transform hover:scale-110  border h-[126px] w-[183px] grid justify-items-center items-center rounded-2xl bg-opacity-30 content-center'>
        <div className='p-4 bg-gray-100 rounded-full'>
        <MapPinIcon className='relative text-emerald-400 rounded-full w-[28px]' />
        </div>
          <span className=''>Nearby Drops</span>
      </a>
      <a href='/help' className='card transition-transform transform hover:scale-110  border h-[126px] w-[183px] grid justify-items-center items-center rounded-2xl bg-opacity-30 content-center'>
        <div className='p-4 bg-gray-100 rounded-full'>
        <QuestionMarkCircleIcon className='relative text-emerald-400 rounded-full w-[28px] ' />
        </div>
          <span className=''>Help Center</span>
      </a>
    </div>
   
  )
}
