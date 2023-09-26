import React from 'react'
import { PencilSquareIcon, CurrencyDollarIcon, MapPinIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'


export default function Hero   () {


  return (
 <div className='grid grid-cols-2 m-auto relative w-max gap-1 font-semibold'>
      <a href='/create-order' className='card bg-slate-300 h-[126px] w-[183px] grid justify-items-center items-center rounded-2xl bg-opacity-30'>
        <div className='p-2 bg-emerald-400 bg-opacity-30 rounded-full'>
        <PencilSquareIcon className=' text-emerald-400 w-[28px]' />
        </div>
          <span className=''>Make Order</span>
      </a>

      <a href='/checkrates' className='card bg-slate-300 h-[126px] w-[183px] grid justify-items-center items-center rounded-2xl bg-opacity-30'>
        <div className='p-2 bg-emerald-400 bg-opacity-30 rounded-full'>
        <CurrencyDollarIcon className='relative text-emerald-400 rounded-full w-[28px]' />
        </div>
          <span className=''>Check Rates</span>
      </a>

      <a href='/nearbydrops' className='card bg-slate-300 h-[126px] w-[183px] grid justify-items-center items-center rounded-2xl bg-opacity-30'>
        <div className='p-2 bg-emerald-400 bg-opacity-30 rounded-full'>
        <MapPinIcon className='relative text-emerald-400 rounded-full w-[28px]' />
        </div>
          <span className=''>Nearby Drops</span>
      </a>
      <a href='/help' className='card bg-slate-300 h-[126px] w-[183px] grid justify-items-center items-center rounded-2xl bg-opacity-30'>
        <div className='p-2 bg-emerald-400 bg-opacity-30 rounded-full'>
        <QuestionMarkCircleIcon className='relative text-emerald-400 rounded-full w-[28px]' />
        </div>
          <span className=''>Help Center</span>
      </a>
    </div>
   
  )
}
