import React from 'react'
import { useEffect } from 'react';
import { users } from '../data/data';

const useDebouce = (filterValue, time) => {
    const [filterData, setData] = useState([]);
    setTimeout(() => {
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
                setData([user, ...filterData])
            }

        })
    }, time)
    return [filterData]
}

export default useDebouce