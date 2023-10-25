import React, { useState } from 'react'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import { set, ref, push } from "firebase/database";
import { db } from "../firebase";
import { FirebaseAuthentication } from '@robingenz/capacitor-firebase-authentication';
import { Navigate } from 'react-router-dom';
export default function Profile() {
  const signOut = async () => {
    await FirebaseAuthentication.signOut();
    localStorage.clear();
    window.location.reload();  
  };
  const user = JSON.parse(localStorage.getItem('user'));
    const [profileData, setProfileData] = useState({
      name: localStorage.getItem('name'),
      pic:  localStorage.getItem('profilePic'),
      "user": user
    })
    console.log(user);
    const writeProfile = (profile) => {
      const user = JSON.parse(localStorage.getItem('user'));  
      const uid = user.uid;
        set(ref(db, 'users/' + uid ), {
          profileData: user
        });
      }
      writeProfile(profileData);
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
        <img className='rounded-full w-32' src={user.photoURL} alt="Profile Picture" />
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
            value={user.displayName}
            onChange={(e) => setProfileData({...profileData, user: e.target.value})}
          />
        </div>
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
            value={profileData.name}
            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
          />
        </div>
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
            value={profileData.name}
            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
          />
        </div>
        <button className='btn' onClick={signOut}>Sign Out</button>
      </div>
    </div>
  )
}
}