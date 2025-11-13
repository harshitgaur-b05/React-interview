import React, { useState } from 'react'
import useToggleHook from '../hooks/useToggleHook';
import usePreviousHook from '../hooks/usePreviousHook';

const ShowData = () => {
    const [count, setCount] = useState(0)
    // const [toggle,state]=useToggleHook(false);
    const [value] = usePreviousHook(count)
    return (
        <div className='text-2xl'>{count} prev {value}
            <button className='border-2 p-2  bg-amber-500 text-4xl' onClick={() => setCount(count + 1)}>+</button></div>
    )
}

export default ShowData