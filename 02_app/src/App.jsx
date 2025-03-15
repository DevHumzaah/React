import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username:"ali hamza",
    age: 23
  }

  let newArr= [1,2,3]

  return (
    <>
      <h1 className = 'bg-orange-700 text-black rounded-xl mb-4' >Tailwind Test</h1>
       <Card username="Ali Hamza"></Card>
       <Card username="Ch"></Card>
    </>
  )
}

export default App
