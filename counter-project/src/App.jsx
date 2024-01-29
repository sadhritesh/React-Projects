import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  const addHandler = () =>{
    if (count < 20){
      setCount(count+1);
      setCount(count+1);
      setCount(count+1);
      setCount(count+1);
      setCount(count+1);
      setCount(count+1);
    }
  }
  const subHandler = () =>{
    if (count > 0){
      setCount(count-1);
    }
  }
  return (
    <>
        <h2>Counter : {count}</h2>
        <button onClick={addHandler}>Increase</button>
        <button onClick={subHandler}>Decrease</button>
    </>
  )
}

export default App
