import React, { useState,useEffect } from 'react'
import '../Components/Counter.css'

const Counter = () => {

  let count = 0;
  useEffect(() => {
    window.alert("I am clicked")
  },)
  
  const [currentState, updateState]= useState(count);
  const handleClick = ()=>{
    updateState(currentState+1)
  }
  return (
    <>
      <div className='counter_parent'>
        <div className='main-div'>
          <h1>This is a Counter</h1>
          <button onClick={handleClick}>{currentState}</button>
        </div>
      </div>
    </>
  )
}

export default Counter