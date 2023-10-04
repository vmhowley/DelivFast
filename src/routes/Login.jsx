import React from 'react'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import facebookIcon from '../images/Facebook_icon.png'
import googleIcon from '../images/google_icon.png'
import appleIcon from '../images/apple_icon.png'
import Logo from '../images/logo.png/'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();
signInWithEmailAndPassword(auth, 'vmhowleyh@gmail.com', 'B3n1t0xx25')
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
function Login() {
  return (
<>
    <div
        className="flex space-x-2 cursor-pointer font-bold relative  m-2 mt-9"
        onClick={() => history.back()}
      >
        <ArrowSmallLeftIcon className="h-6 w-6" />
        <span className='font-bold '>Back</span>
      </div>
        <div className='grid place-content-center place-items-center mt-10 gap-20'>
            <div className='grid place-content-center place-items-center'>
            <img src={Logo} alt="image" className='h-40 rounded-full' />
                <span className='font-bold text-6xl'>Let's you in</span>
            </div>
            <div className='grid gap-4 place-content-center'>
                <button className='btn flex  justify-center items-center h-16  dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white'><img className='w-7 mr-2' src={facebookIcon} alt="asd" />Continue with Facebook</button>
                <button className='btn flex  justify-center items-center h-16 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white'><img className='w-7 mr-2' src={googleIcon} alt="asd" />Continue with Facebook</button>
                <button className='btn flex  justify-center items-center h-16 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white'><img className='w-7 mr-2' src={appleIcon} alt="asd" />Continue with Facebook</button>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
            <div className='grid place-items-center'>
                <button className='btn rounded-full  p-4 w-96 dark:bg-emerald-500 bg-emerald-500 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white '>Sign in with password</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Login