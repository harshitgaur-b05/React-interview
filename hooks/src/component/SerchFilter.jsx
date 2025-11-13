import React from 'react'
import { users } from '../data/data'
import { useEffect } from 'react'
import { useState } from 'react'

//data fetch //done 
// //ui //done
// filtering logic  
// input filed 
// filter ->  data show 
const SerchFilter = () => {
    const [filterValue, setValue] = useState()
    const [filterData, setData] = useState([]);
    function filter(filterValue) {

        users.forEach((ele) => {
            const user = ele.username.toLowerCase();
            const fil = filterValue.toLowerCase();
            let flag = true;
            for (let i = 0; i < fil.length; i++) {
                if (user[i] != fil[i]) {
                    flag = false;
                }
            }
            if (flag) {
                setData([user,...filterData])
            }
        })

    }
    function handelChange(valuees) {
        setValue(valuees) 
        if(!valuees){
            setData([])
        } 
    }
    useEffect(() => {
        console.log(filterValue);
        if (filterValue)
            filter(filterValue);

    }, [filterValue])
    return (
        <div>
            <input type="text" onChange={(e) => handelChange(e.target.value)} className='w-50 border-2' />
            <div className='w-70 h-70 bg-amber-400 text-lg'>
                {filterData.map((ele,i) => {
                    return (
                        <div key={i} className='border-2 bg-amber-700'>
                            {ele}
                        </div>)
                })}

            </div>
            <button className=''>Searcj</button>

        </div>
    )
}

export default SerchFilter