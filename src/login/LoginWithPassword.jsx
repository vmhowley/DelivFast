import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase"
import { useNavigate } from 'react-router-dom';

function LoginWithPass() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    "email": "",
    "password": ""
  })

  function handleSign (e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if (user){

        localStorage.setItem("authenticated", true);
        console.log(userCredential)
        navigate('/');
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    }); 
      
  }

return(
        
      <div className='flex p-4 justify-center  items-center ' >
      <div className="w-96">
      
        <form onSubmit={handleSign} className="rounded-lg  grid">
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
              placeholder="Email Address"
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label
              className="block   mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="password"
              name='password'
              type="password"
              placeholder="password"
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
            />
          </div>

        <button type='submit' value='submit' className='btn bg-black' >Sign in</button>
        </form>
      </div>
      </div>
      )
  }
  
  
  
  

export default LoginWithPass;