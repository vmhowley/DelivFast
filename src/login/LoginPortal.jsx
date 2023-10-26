
import React from 'react'
import facebookIcon from '../images/Facebook_icon.png'
import googleIcon from '../images/google_icon.png'
import appleIcon from '../images/apple_icon.png'
import Logo from '../images/delivery.png/'
import { auth } from '../firebase'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import {  GoogleAuthProvider,
  OAuthProvider,
  PhoneAuthProvider,
  signInWithCredential,} from "firebase/auth";  
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FirebaseAuthentication } from '@robingenz/capacitor-firebase-authentication';



function LoginPortal({step, setStep}) {
  
  const signInWithGoogle = async () => {
    // 1. Create credentials on the native layer
    const result = await FirebaseAuthentication.signInWithGoogle();
    // 2. Sign in on the web layer using the id token
    
    const credential = GoogleAuthProvider.credential(result.credential?.idToken);
    await signInWithCredential(auth, credential);
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoUrl;
    const uid = result.user.uid;
     localStorage.setItem('authenticated', true);
     localStorage.setItem('userdata', JSON.stringify(result.user));
     localStorage.setItem('name', name);
     localStorage.setItem('email', email);
     localStorage.setItem('profilePic', profilePic);
     localStorage.setItem('uid', uid);
     
     window.location.reload();  
    };
    
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    navigate('/loginWithPass')
    }
   
    const logged = localStorage.getItem('authenticated');
    if (logged) {
      
      return <Navigate replace to='/'/>
    }
    return (
    <>
      <div
        className="flex space-x-2 cursor-pointer font-bold relative  m-2 mt-9"
        onClick={() => history.back()}
      >
        <ArrowSmallLeftIcon className="h-6 w-6" />
        <span className="font-bold ">Back</span>
      </div>
      <div className="grid place-content-center place-items-center mt-10 gap-20">
        <div className="grid place-content-center place-items-center">
          <img src={Logo} alt="image" className=" rounded-md" />
          <span className="font-bold text-6xl">Let&apos;s you in</span>
        </div>
        <div className="grid gap-4 place-content-center">
          <button className="btn flex  justify-center items-center h-16  dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white">
            <img className="w-7 mr-2" src={facebookIcon} alt="asd" />
            Continue with Facebook
          </button>
          <button onClick={signInWithGoogle} className="btn flex  justify-center items-center h-16 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white">
            <img className="w-7 mr-2" src={googleIcon} alt="asd" />
            Continue with Google
          </button>
          <button className="btn flex  justify-center items-center h-16 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white">
            <img className="w-7 mr-2" src={appleIcon} alt="asd" />
            Continue with Facebook
          </button>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
          <div className="grid place-items-center">
            <button onClick={handleForm} className="btn rounded-full  p-4 w-96 dark:bg-emerald-500 bg-emerald-500 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white ">
              Sign in with password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


export default LoginPortal;