import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const usePreviousHook = (value) => {
    const ref=useRef(value);//if i do not pass a value it will take undefined as inital value 
    
    useEffect(()=>{
        ref.current=value;
    },[value])//is not value is here it will presever state when it is first rendered 
    return [ref.current]

}

export default usePreviousHook