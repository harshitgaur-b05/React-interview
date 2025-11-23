import { createSlice } from "@reduxjs/toolkit"


const initialState={
    counter:0
} 

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
             state.counter++
        },
        decrement:(state)=>{
                         state.counter--

        },
        addNumber:(state,actions)=>{
             state.counter=state.counter+actions.payload
        }
    }
});



export const {increment,decrement,addNumber} =counterSlice.actions;

export default counterSlice.reducer;
