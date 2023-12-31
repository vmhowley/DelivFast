import {  Routes, Route  } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './routes/Home'
import Transactions from './routes/Transactions'
import MakeOrder from './routes/MakeOrder'
import NotFound from './routes/NotFound'
import LoginPortal from './login/LoginPortal'
import LoginWithPass from './login/LoginWithPassword'
import Profile from './routes/Profile'
import CheckRates from './routes/CheckRates'
import { App as CapacitorApp } from '@capacitor/app'
import {
  setKey,
  fromAddress,
  fromLatLng,
} from "react-geocode"
import { auth } from './firebase'
import Notifications from './components/Notifications'
  
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
    const user = auth.currentUser
    localStorage.setItem('user', JSON.stringify(user));
    const crd = pos.coords;
    const lat = crd.latitude;
    localStorage.setItem('lat', lat);
    const lng = crd.longitude;
    localStorage.setItem('lng', lng);
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
    <>
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<LoginPortal />} />
      <Route path="/loginwithPass" element={<LoginWithPass />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/create-order" element={<MakeOrder />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/check_rate" element={<CheckRates />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
    </>
  )
   } 

   
  export default App
