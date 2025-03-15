import { useState } from 'react'

function App() {

//props

  let [counter, setCounter] = useState(0)

  // let counter=10

  const addValue =()=>{
    // console.log("value added", Math.random());
    // counter= counter + 1
   if(counter < 20){
    setCounter(counter + 1)
   }
  
}

  const removeValue =()=>{

      if(counter > 0){

        setCounter(counter-1)
      }
      
}

  return (
    <> 
    <h1>Hello World</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}> Add Value {counter}</button>
    <br />
    <br></br>

    <button onClick={removeValue}> Remove Value {counter}</button>
     
    </>
  )
}

export default App
