import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import OrdersList from './routes/OrdersList'
import Transactions from './routes/Transactions'
import MakeOrder from './routes/MakeOrder'
import NavBar from './components/NavBar'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<OrdersList />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/create-order" element={<MakeOrder />} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
    <NavBar />
    </BrowserRouter>
    )
}

export default App
