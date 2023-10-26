import React, { useState } from 'react'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import { FirebaseAuthentication } from '@robingenz/capacitor-firebase-authentication';
import { Navigate } from 'react-router-dom';
export default function Profile() {
 
  const signOut = async () => {
    await FirebaseAuthentication.signOut();
    localStorage.clear();
    window.location.reload();  
  };
 
 
  const userData = JSON.parse(localStorage.getItem('user'));
  const [profileData, setProfileData] = useState({
  name: localStorage.getItem('name'),
  pic:  localStorage.getItem('profilePic'),
  user: userData
})

const isLogged = localStorage.getItem("authenticated");

      if (!isLogged) {
        return <Navigate replace to="/login" />;
        // Redirect
      } else {
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
        <img className='rounded-full w-32' src={profileData.user.photoURL} alt="Profile Picture" />
      </div>
      <div className=' m-4'>
      <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="name"
          >
            Name
          </label>
          
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="name"
            name='name'
            type="text"
            placeholder="Full Name"
            value={profileData.user.displayName}
            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
          />
        </div>
      <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="email"
          >
            Email
          </label>
          
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="email"
            name='email'
            type="email"
            placeholder="Email"
            value={profileData.user.email}
            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
          />
        </div>
      <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="phone"
            name='phone'
            type="tel"
            placeholder="Full Name"
            value={userData.phone}
            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
          />
        </div>
        <button className='btn' onClick={signOut}>Sign Out</button>
      </div>
    </div>
  )
}
}