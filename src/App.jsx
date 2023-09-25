import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import OrdersList from './routes/OrdersList'
import Transactions from './routes/Transactions'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<OrdersList />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/" element={<h1>hola</h1>} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
    </BrowserRouter>
    )
}

export default App
