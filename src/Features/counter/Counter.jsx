// import React, { use } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,reset,incrementByAmount, decrementByAmount} from './counterSlice'
import { useState } from 'react';

const Counter = () => {
    const count=useSelector((state)=>{
        return state.counter.count;
    })
  const [incrementAction, setIncrementAction] = useState(0)
  const [decrementAction, setDecrementAction] = useState(0)

  const addValue=Number(incrementAction) || 0
  const subValue=Number(decrementAction) || 0
  const resetAll=()=>{
    setIncrementAction(0)
    dispatch(reset())
  }

    const dispatch=useDispatch()
  return (
    <div>
        <div>
            <h1>this is {count}</h1>
        </div>
        <div>
          <button onClick={()=>dispatch(increment())}>+</button>
          <button onClick={()=>dispatch(decrement())}>-</button>
          </div>
        <div>
            <input type="text" name="incrementAction" value={incrementAction} onChange={(e)=>setIncrementAction(e.target.value)} id="" />
            <div>
              <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
              <button onClick={resetAll}>Reset</button>
            </div>
        </div>
       
        <div>
            <input type="text" name="decrementAction" value={decrementAction} onChange={(e)=>setDecrementAction(e.target.value)} id="" />
            <div>
              <button onClick={()=>dispatch(decrementByAmount(subValue))}>Subtract Amount</button>
              <button onClick={resetAll}>Reset</button>
            </div>
        </div>

    </div>
  )
}

export default Counter