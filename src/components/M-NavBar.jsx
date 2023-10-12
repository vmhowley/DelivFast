/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar'
import { BellIcon } from '@heroicons/react/24/solid'
import avatar from '../images/avatar.png'
export default function Mnav() {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const profilePic = localStorage.getItem('profilePic');
  
  return (
<div className="p-2  bg-white dark:bg-zinc-800   rounded-b-3xl justify-between items-center flex absolute top-0 z-50 w-full  ">
    <div className="justify-start items-center gap-4 flex">
        <img className="w-[49px] h-[49px] rounded-[56px] border border-white border-opacity-30" src={profilePic ? profilePic : avatar }/>
        <div className="flex-col justify-center items-start gap-1 inline-flex">
            <span className="font-bold text-xl">{name}</span>
            <p className="text-zinc-400 text-xs font-normal dark:text-zinc-300   ">{email}</p>
        </div>
    </div>
  <div className='flex'>
  <BellIcon className="h-6 w-6 text-gray-600" />
    </div>      
</div>
  )
}
