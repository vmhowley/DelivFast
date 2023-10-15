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

import { useEffect } from "react";

function App() {
  CapacitorApp.addListener('backButton', ({canGoBack}) => {
    if(!canGoBack){
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });
  return (

    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<LoginPortal />} />
      <Route path="/loginwithPass" element={<LoginWithPass />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-order" element={<MakeOrder />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    
    )
    
}

export default App
