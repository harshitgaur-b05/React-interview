import React, { useEffect, useState, useCallback } from 'react'
import useDebounce from '../hooks/useDebouce';
import { users } from '../data/data';

const SerchFilterWithDebounce = () => {
    const [searchFilter, setSearchFilter] = useState([]);

    const [searchVALUE, setsearchVALUE] = useState('');
    const debouncedValue = useDebounce(searchVALUE, 50)

    //call back for more optimization
    const filterData = useCallback(() => {
        const filtered = debouncedValue.length > 0
            ? users.filter((ele) => ele.username.toLowerCase().includes(debouncedValue.toLowerCase()))
            : [];
        setSearchFilter(filtered);
    }, [debouncedValue]);

    useEffect(() => {

        filterData()


    }, [filterData])

    return (
        <div className='w-full min-h-70  bg-amber-400'>
            <div className='flex p-5 items-center w-full flex-col min-h-70 bg-amber-800 gap-3'>
                <input type="text" onChange={(e) => setsearchVALUE(e.target.value)} className='w-90  bg-white  rounded-xl' />
                <div className='bg-white/45 overflow-y-auto min-h-40 w-90'>
                    {searchVALUE.length>0 && searchFilter.length>0 ?
                        (<div>{
                            searchFilter.map((ele, i) => (
                                <div key={ele.id} className='text-lg'>{ele.username}</div>
                            ))}</div>)

                        : (<div>2</div>)}
                </div>
            </div>

        </div>
    )
}

export default SerchFilterWithDebounce