import React from 'react'

const NotFound = () => {
  return (
<>
<div className="w-96 h-96 py-24 flex-col justify-center items-center gap-10 inline-flex">
    <div className="w-80 h-64 relative">
        <div className="opacity-10 w-12 h-14 left-[257.37px] top-[83.10px] absolute">
        </div>
    </div>
    <img src="..\src\images\Frame.png" alt="" />

    <div className="self-stretch h-32 flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch text-center  text-2xl font-bold font-['Urbanist'] leading-7">Not Found</div>
        <div className="self-stretch text-center   text-lg font-normal font-['Urbanist'] leading-relaxed tracking-tight">The code you entered cannot be found, please check the code again or search with another code.</div>
    </div>
</div>
</>
  )
}

export default NotFound