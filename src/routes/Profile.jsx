import React, { useState } from 'react'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import { set, ref, push } from "firebase/database";
import { db } from "../firebase";
export default function Profile() {
    
    const [profileData, setProfileData] = useState({
      name: localStorage.getItem('name'),
      pic:  localStorage.getItem('profilePic')
    })
    const name = localStorage.getItem('name')

    const writeProfile = (profileData) => {
        const uid = localStorage.getItem('uid')
        set(ref(db, 'users/' + uid + '/profile/'), {
          profileData
        });
      }
      writeProfile(profileData);

  return (
    <div className='profile '>
<div
        className="flex space-x-2 cursor-pointer font-bold relative  m-2 mt-9"
        onClick={() => history.back()}
      >
        <ArrowSmallLeftIcon className="h-6 w-6" />
        <span className="font-bold ">Back</span>
      </div>
      <div className='flex justify-center'>
        <img className='rounded-full w-32' src={profileData.pic} alt="asd" />
      </div>
      <div>
      <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="name"
          >
            Sender Name
          </label>
          
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="name"
            name='name'
            type="text"
            placeholder="Full Name"
            value={profileData.name}
            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
          />
        </div>
      </div>
    </div>
  )
}
