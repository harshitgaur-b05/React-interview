import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useLocaStorage = (key,initalvalue) => {
    const [data,setData]=useState(()=>{
        let pd=localStorage.getItem(key);
        return pd?JSON.parse(pd):initalvalue
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(data));
    },[key,initalvalue]);

    return [key,initalvalue];
}

export default useLocaStorage