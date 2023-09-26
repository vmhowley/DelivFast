/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar'
import { BellIcon } from '@heroicons/react/24/solid'
import DarkModeToggle from '../components/DarkMode'
export default function Mnav() {
  return (
<div className="p-2 shadow-xl bg-white bg-opacity-30  backdrop-blur-md rounded-b-3xl justify-between items-center flex fixed  top-0   w-full z-50">
    <div className="justify-start items-center gap-4 flex">
        <img className="w-[49px] h-[49px] rounded-[56px] border border-white border-opacity-30" src="https://unavatar.io/benitoxx25" />
        <div className="flex-col justify-center items-start gap-1 inline-flex">
            <span className=" text-xl font-semibold leading-normal">Benito, Adam!</span>
            <p className="text-zinc-400 text-xs font-normal ">25 Septiembre, 2023</p>
        </div>
    </div>
  <div className='flex'>
  <BellIcon className="h-6 w-6 text-gray-600" />
    </div>      
</div>
  )
}
