import React from 'react'
import TransactionHist from '../components/TransactionHist'
import Mnav from '../components/M-NavBar'
import NavBar from '../components/NavBar'
export default function Transactions   () {
  return (
    <>
    <Mnav />
    <div className='mt-20 mb-20'>
    <TransactionHist />
    </div>
    <NavBar />
    </>
  )
}
