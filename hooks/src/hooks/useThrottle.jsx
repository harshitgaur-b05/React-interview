//import
// create compo
// ref -> lastTime
//return useCaLLback((...args)=>{
//
//    })
//
//logic 
//if(time.now()-lastime >=delay){
//callbacfuc(...args)
//
//},[callback,delay]
//
//throtle function returns callback function 


import React, { useCallback,useRef } from 'react'

const useThrottle = (callback,delay) => {
    //last time set 

    const lastTime=useRef(Date.now());

    return useCallback((...args)=>{
        //check delay 
        if(Date.now()-lastTime.current>=delay){
            callback(...args);
            lastTime.current=Date.now()
        }
    },[callback,delay])
}

export default useThrottle