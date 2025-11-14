import React, { useState } from 'react';
import { users } from '../data/data';

const SearchFilter = () => {
    const [filterValue, setValue] = useState('');
    
    // ✅ FIX #1 & #2: Move filtering logic directly into render
    // No forEach, no useEffect, no state management issues
    const filterData = filterValue 
        ? users.filter((ele) => {
            const user = ele.username.toLowerCase();
            const fil = filterValue.toLowerCase();
            
            // ✅ FIX #3: Better search - use includes() instead of char-by-char
            return user.includes(fil);
            
            // Or keep your original logic but fixed:
            // let flag = true;
            // for (let i = 0; i < fil.length; i++) {
            //     if (user[i] !== fil[i]) {
            //         flag = false;
            //         break; // Add break to stop early
            //     }
            // }
            // return flag;
        })
        : [];

    // ✅ FIX #4: Simple state update
    function handleChange(value) {
        setValue(value);
    }

    // ✅ FIX #5: Add clear button
    const clearSearch = () => {
        setValue('');
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            {/* ✅ FIX #6: Better UI with clear button */}
            <div className="relative mb-4">
                <input 
                    type="text" 
                    value={filterValue}
                    onChange={(e) => handleChange(e.target.value)} 
                    placeholder="Search users..."
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {filterValue && (
                    <button
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 font-bold"
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* ✅ FIX #7: Better styling and conditional rendering */}
            {filterData.length > 0 ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden max-h-96 overflow-y-auto">
                    {filterData.map((ele, i) => (
                        <div 
                            key={ele.id || i} 
                            className="p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            <div className="font-medium text-gray-800">{ele.username}</div>
                            {ele.email && (
                                <div className="text-sm text-gray-600">{ele.email}</div>
                            )}
                        </div>
                    ))}
                </div>
            ) : filterValue ? (
                <div className="bg-white rounded-lg shadow-md p-4 text-center text-gray-500">
                    No users found matching "{filterValue}"
                </div>
            ) : null}

            {/* ✅ FIX #8: Show result count */}
            {filterData.length > 0 && (
                <div className="mt-4 text-sm text-gray-600">
                    Found {filterData.length} user{filterData.length !== 1 ? 's' : ''}
                </div>
            )}

            {/* ✅ FIX #9: Removed dead/commented code */}
        </div>
    );
};

export default SearchFilter;
// import React from 'react'
// import { users } from '../data/data'
// import { useEffect } from 'react'
// import { useState } from 'react'

// //data fetch //done 
// // //ui //done
// // filtering logic  
// // input filed 
// // filter ->  data show 
// const SerchFilter = () => {
//     const [filterValue, setValue] = useState()
//     const [filterData, setData] = useState([]);
//     function filter(filterValue) {
//         if(filterValue)
//         users.forEach((ele) => {
//             const user = ele.username.toLowerCase();
//             const fil = filterValue.toLowerCase();
//             let flag = true;
//             for (let i = 0; i < fil.length; i++) {
//                 if (user[i] != fil[i]) {
//                     flag = false; 
//                 }
//             }
//             if (flag==true) {
//                 setData([user,...filterData])
//             }
//         })
//       setData( users.filter((ele)=>{
//                     const user = ele.username.toLowerCase();
//             const fil = filterValue.toLowerCase();
//              let flag = true;
//             for (let i = 0; i < fil.length; i++) {
//                 if (user[i] != fil[i]) {
//                     return false;
//                 }
//             }
//             return true;
//       })) 

//     }
//     function handelChange(valuees) {
//         setValue(valuees) 
//         if(!valuees){
//             setData([])
//         } 
//     }
//     useEffect(() => {
//         console.log(filterValue);
//         if (filterValue)
//             filter(filterValue);

//     }, [filterValue])
//     return (
//         <div>
//             <input type="text" onChange={(e) => handelChange(e.target.value)} className='w-50 border-2' />
//             <div className='w-70 h-70 bg-amber-400 text-lg'>
//                 {filterData.map((ele,i) => {
//                     return (
//                         <div key={i} className='border-2 bg-amber-700'>
//                             {ele}
//                         </div>)
//                 })}

//             </div>
//             <button className=''>Search</button>

//         </div>
//     )
// }

// export default SerchFilter