import { useState,useEffect } from "react";

export default function useDebounce(value, delay) {
    const [debouncedValue,setDebouncedValue]=useState(value)

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebouncedValue(value)
        },delay)
        return ()=>clearInterval(timer)
    },[value,delay])

    return debouncedValue;
    // const [debouncedValue, setDebouncedValue] = useState(value);

    // useEffect(() => {
    //     // 1. Start a timer when value changes
    //     const timer = setTimeout(() => {
    //         console.log(value);
            
    //         setDebouncedValue(value);  // Update after delay
    //     }, delay);

    //     // 2. If value changes again before timer ends, 
    //     //    clear the old timer and start new one
    //     return () => clearTimeout(timer);
    // }, [value, delay]);

    // return debouncedValue;
}
 
