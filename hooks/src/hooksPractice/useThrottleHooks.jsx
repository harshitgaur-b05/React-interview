import React from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'

const useThrottleHooks = (func,delay) => {
    let stdate=useRef(0);
    return useCallback((...args)=>{
        let nowdate=Date.now();
        if(nowdate-stdate.current>=delay){
            func(...args);
            stdate.current=Date.now();
        }

    },[func,delay])
}

export default useThrottleHooks