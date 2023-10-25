/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar'
import { BellIcon } from '@heroicons/react/24/solid'
import avatar from '../images/avatar.png'
import { Link } from 'react-router-dom'
export default function Mnav() {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const profilePic = localStorage.getItem('profilePic');
  
  return (
    <div className="p-2 dark:bg-opacity-60 bg-opacity-10 backdrop-blur-md  text-emerald-400 bg-white dark:bg-zinc-900   justify-between items-center flex fixed top-0 z-50 w-full  ">
      <div className="justify-start items-center gap-4 flex p-2">
        <img
          className="w-[49px] h-[49px] rounded-[56px] border border-white border-opacity-30"
          src={profilePic ? profilePic : avatar}
        />
        <div className="">
          <span className="font-bold text-lg">{name}</span>
          <p className="text-zinc-400 text-xs font-light dark:text-zinc-300    ">
            {email}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link to='/notifications'>
        <BellIcon className="h-6 w-6 relative right-3 text-gray-600" />
        </Link>
      </div>
    </div>
  );
}
