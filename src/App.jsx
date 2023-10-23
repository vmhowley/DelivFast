import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import OrdersList from './routes/OrdersList'
import Transactions from './routes/Transactions'
import MakeOrder from './routes/MakeOrder'
import NavBar from './components/NavBar'
import NotFound from './routes/NotFound'
import Login from './routes/Login'
import LoginPortal from './login/LoginPortal'
import LoginWithPass from './login/LoginWithPassword'
import Profile from './routes/Profile'
import { App as CapacitorApp } from '@capacitor/app';
import { Geolocation } from '@capacitor/geolocation';
import {
  setKey,
  fromAddress,
  fromLatLng,
} from "react-geocode";
import NotificationReq from './NotificationReq'; 
import { auth, user } from './firebase';
  
  function App() {
    CapacitorApp.addListener('backButton', ({canGoBack}) => {
    if(!canGoBack){
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
    const lat = crd.latitude;
    const lng = crd.longitude;
    localStorage.setItem('lat', lat);
    localStorage.setItem('lng', lng);
    localStorage.setItem('user', JSON.stringify(auth.currentUser));
    setKey("AIzaSyCx0wq_NY0cy99XoWDBtiSR-VAUm3dUmWI");
  fromLatLng(lat, lng)
  .then(({ results }) => {
    localStorage.setItem('sender_address', results[0].formatted_address);
  })
  .catch(console.error);
    fromLatLng(lat, lng)
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }


  navigator.geolocation.watchPosition(success, error, options);


  return (

    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<LoginPortal />} />
      <Route path="/loginwithPass" element={<LoginWithPass />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-order" element={<MakeOrder />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
   } 

  
  export default App
