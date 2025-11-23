import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addNumber, decrement, increment } from '../app/counter/CounterSlice'

const Counter = () => {

    const counter=useSelector((state)=>(state.counter.counter))
    const dispatch=useDispatch() 

  return (
    <>
    <div>{counter}</div>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(addNumber(10))}>add 10</button>
  </>
  )
}

export default Counter