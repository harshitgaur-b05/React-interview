import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const usedeboucehook = (value,delay) => {
    const [debouceValue,setDebouceavalue]=useState('');
    useEffect(()=>{
        let timer=setTimeout(()=>{
            setDebouceavalue(value);

        },delay)
        return ()=>{
            clearTimeout(timer);
        }
    },[value,delay])

    return debouceValue;
}

export default usedeboucehook