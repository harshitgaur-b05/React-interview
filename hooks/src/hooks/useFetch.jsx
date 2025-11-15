import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData ]=useState(null);
    const [loading,setLod]=useState(true)
    const [error,setE]=useState(null)

    //useEffect -> dependecy url ->url ->rest
    useEffect(()=>{
        //reset
        setLod(true)
        setE(null)

        //calc
        fetch(url).then(
            (res)=>{
                if(!res.ok){
                    throw new Error('bad req')
                }
                return res.json();
            }
        ).then((data)=>{
            setData(data)
            setLod(false)
            
        }).catch((err)=>{
            console.error(err);
            setE(error)
            setLod(false)
            
        })
    },[url])
    return {data,loading,error}
}

export default useFetch