/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar'
import { BellIcon } from '@heroicons/react/24/solid'
export default function Mnav() {
  return (
<div className="p-2  bg-white dark:bg-zinc-800   rounded-b-3xl justify-between items-center flex absolute top-0 z-50 w-full  ">
    <div className="justify-start items-center gap-4 flex">
        <img className="w-[49px] h-[49px] rounded-[56px] border border-white border-opacity-30" src="https://unavatar.io/benitoxx25" />
        <div className="flex-col justify-center items-start gap-1 inline-flex">
            <span className="font-bold text-xl">Benito M Howley!</span>
            <p className="text-zinc-400 text-xs font-normal dark:text-zinc-300   ">Administrator</p>
        </div>
    </div>
  <div className='flex'>
  <BellIcon className="h-6 w-6 text-gray-600" />
    </div>      
</div>
  )
}
