import {createSlice} from '@reduxjs/toolkit'

const initialState={
    count:0
}
const counterSlice=createSlice({
    name:"counters",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        },
        incrementByAmount:(state,action)=>{
            state.count+=action.payload
        },
        decrementByAmount:(state,action)=>{
            state.count-=action.payload
        },
        

    }
})
console.log(initialState);


export const {increment,decrement,reset,incrementByAmount,decrementByAmount} = counterSlice.actions
export default counterSlice.reducer

