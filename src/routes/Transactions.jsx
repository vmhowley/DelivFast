import TransactionHist from '../components/TransactionHist'
import Mnav from '../components/NavBar'
export default function Transactions   () {
  return (
    <>

    <div className='mt-4 flex flex-col justify-center content-center mb-20'>
      <span className='font-bold text-emerald-600 m-2 p-2 rounded-md bg-emerald-500 bg-opacity-20'>My Transaction</span>
    <TransactionHist />
    </div>
    </>
  )
}
