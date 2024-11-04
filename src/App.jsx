import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addvalue = () => {
    if(counter<20){
    setCounter(counter+1)
  }else{
    alert("Maximum Limit Reached.")
  }
  }

  const removevalue = () => {
    if(counter>0){
    setCounter(counter-1)
  }else{
     alert("Minimum Limit Reached.")
  }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h3>The counter value is : {counter}</h3>
      <hr></hr>
      <button style={{margin: '10px'}} onClick={addvalue}>Add value : {counter}</button>
      <button style={{margin: '10px'}} onClick={removevalue}>Remove value : {counter}</button>
    </>
  )
}

export default App
