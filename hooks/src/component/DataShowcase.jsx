import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const DataShowcase = () => {
  const {data,loading,error}=useFetch('https://dummyjson.com/products')
  useEffect(()=>{
    console.log(data);
    
  },[data])
    return (
        <>
        {loading ? (
            <div>loading</div>
        ): (<div>
            {data.limit}
        </div>) }
        </>
    // <div>{data.lenght>0 && (<div>
    //     {data.map((ele)=>(
    //         <div>
    //             {ele}
    //         </div>
    //     ))}
    // </div>)
    // }</div>
  )
}

export default DataShowcase