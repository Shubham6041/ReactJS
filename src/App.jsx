import { useState } from 'react'
import './App.css'



function App() {

  let [value, setValue] = useState(11)

  function addValue()
  {
    if(value<20)
    {
      console.log("clicked "+value)
      setValue(value+1)
    }
  }

  let removeValue = ()=>
  {
    if(value>0)
    {
      console.log("Removed "+value);
      setValue(value-1)
    }

  }

  return ( 
    <>
      <h1>Learning React</h1>
      <h3>Counter Value : {value}</h3>
      <button onClick= {addValue}>addValue : {value}</button>
      <button onClick={removeValue}>removeValue : {value}</button>
    </>
  )
}

export default App
