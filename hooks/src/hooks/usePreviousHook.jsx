import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const usePreviousHook = (value) => {
    const ref=useRef(value);
    
    useEffect(()=>{
        ref.current=value;
    },[value])
    return [ref.current]

}

export default usePreviousHook