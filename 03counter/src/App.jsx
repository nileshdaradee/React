import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let counter=0;

  const addValue=()=>{
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);

  }

  return (
    <>
    <h1>Chai Aur Code</h1>
    <h2>Counter Value: {count}</h2>
    <button  onClick={addValue}>Add Value</button>
    <br/>
    <br/>
    <button onClick={()=>{setCount(count ?count-1:0)}}>remove value</button>
    </>
  )
}

export default App
