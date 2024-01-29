import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const laptop1 = {
    laptopName: 'MacBook', 
    description: 'MacBook is the best laptop'
  }
  const laptop2 = {
    laptopName: 'Asus', 
    description: 'Asus is the best laptop'
  }

  return (
    <>
      <div className='flex'>
        <Card details={ laptop1 } />
        <Card details={ laptop2 } />
      </div>
    </>
  )
}

export default App
