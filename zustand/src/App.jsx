import { useEffect } from "react"
import useCounterstore from "./store/useCounterstore"

import useFetchstore from "./store/useFetchstore"


function App() {
const count =useCounterstore((state)=>state.count)
const inc=useCounterstore((state)=>state.incre)


//fetch
const product=useFetchstore((state)=>state.product)
const fetchData =useFetchstore((state)=>state.fetchData)
const err=useFetchstore((state)=>state.err)
const loading=useFetchstore((state)=>state.loading)


useEffect(()=>{
  fetchData('https://dummyjson.com/products')
},[])
  return (
<>
<div className="w-screen h-screen "
>

  {loading ? (<div>1</div>):(<div>{product && product.length>0 && product.map((ele)=>(<div key={ele.id}>
    {ele.title}
  </div>)) }</div>)}
  <div className=" text-4xl text-black">{count}</div>
  <button className="text=2xl p-10" onClick={inc}>+</button>
  </div></>
  )
}

export default App
