import React, { useEffect, useState } from 'react'
//local  storage -> store [value ,setValue]

const useLocalstorage = (key, initialVALUE) => {
    const [storeValue, setStoreValue] = useState(() => {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : initialVALUE
    })
    useEffect(() => {
         localStorage.setItem(key, JSON.stringify(storeValue))

    }, [key, storeValue])
    return [storeValue, setStoreValue]
}

export default useLocalstorage