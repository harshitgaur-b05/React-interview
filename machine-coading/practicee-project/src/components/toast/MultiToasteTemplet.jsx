import React from 'react'
import { motion } from "motion/react"
import { useEffect } from 'react'
const ToastTemplet = ({toastType,toastColor,setShowtoast}) => {
    useEffect(()=>{
     setTimeout(()=>{
        setShowtoast(false)
     },3000)   
    })
  return (
    <motion.div 
    initial={{
        translateX:100
    }}
    animate={{
        
        translateX:0,
        transition:{duration:1}
    }}
    exit={{
        translateX:100,
        opacity:0}}
    
    className={`absolute w-auto rounded-sm right-3 top-3 px-6 py-1 bg-${toastColor}-400  `} >
        <div className='flex justify-between gap-7 items-center '>
        <div className='relative right-2 '>
            {toastType}
        </div>
        <div className=' cursor-pointer text-sm top text-red-500' onClick={()=>{setShowtoast(false)}}>
            x
        </div>
        </div>
    </motion.div>
  )
}

export default ToastTemplet