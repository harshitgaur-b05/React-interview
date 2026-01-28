import React from 'react'
import ToastTemplet from './toast/ToastTemplet'
import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
const multipleToaste = () => {
  const [toaste,setToast]=useState([]);
  const handelToasteSelect=(e)=>{
e.preventdefault();

  }
  return (
     <>
    <div className='min-w-full min-h-100 bg-amber-500 relative' >
        <div className='flex  gap-3 mx-8'>
        <button className='px-2 text-xs text-center py-1 bg-green-400 rounded-lg my-4' onClick={()=>{setToastType("success") ,setShowtoast(true),setToastColor('green')}}>success</button>
        <button className='px-2 text-xs text-center py-1 bg-red-400 rounded-lg my-4' onClick={()=>{setToastType("error"),setShowtoast(true),setToastColor('red')}}>error</button>
        <button className='px-2 text-xs text-center py-1 bg-orange-400 rounded-lg my-4' onClick={()=>{setToastType("warning"),setShowtoast(true),setToastColor('orange')}}>warning</button>
        <button className='px-2 text-xs text-center py-1 bg-blue-400 rounded-lg my-4' onClick={()=>{setToastType("caution"),setShowtoast(true),setToastColor('blue')}} >caution</button>
        </div>

        {showToast && <AnimatePresence><ToastTemplet toastType={toastType} toastColor={toastColor}  setShowtoast={setShowtoast}/></AnimatePresence>}
        


    </div>
    </>
  )
}

export default multipleToaste