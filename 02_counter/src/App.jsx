import { useState } from 'react'
import './App.css'

function App() {
  // let counter=15
  let [counter,setCounter]=useState(10)

  const addValue=()=>{
    // counter+=1
    if(counter<20)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    
    console.log("Value added",counter)
  }
  const removeValue=()=>{
    if(counter!=0)
    setCounter(counter-1)
    console.log("Value removed",counter)
  }

  return (
    <>
      <h1>Value Increment and Decrement</h1>
      <p>Current Value:{counter}</p>
      <p>
      <button
      onClick={addValue}>Add Value</button>
      </p>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
