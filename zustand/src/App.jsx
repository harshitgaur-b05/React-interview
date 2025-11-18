import useCounterstore from "./store/useCounterstore"


function App() {
const count =useCounterstore((state)=>state.count)
const inc=useCounterstore((state)=>state.incre)
  return (
<>
<div className="w-screen h-screen "
>
  <div className=" text-4xl text-black">{count}</div>
  <button className="text=2xl p-10" onClick={inc}>+</button>
  </div></>
  )
}

export default App
