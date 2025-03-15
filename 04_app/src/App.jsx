import { useState , useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength]= useState(8)
  const[numberAllowed, setNumberAllowed]= useState(false)
  const[charAllowed, setCharAllowed]= useState(false)
  const[password, setPassword]=useState("")


  //ref hook
  const passwordRef= useRef(null)


  const passwordGenerator= useCallback(()=>{

    let pass= ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}[]+=_-~?/.,><"

    for (let i = 0; i <=length; i++) {
       let char = Math.floor(Math.random() * str.length +1)
      
       pass += str.charAt(char)
    }
    setPassword(pass)

  } , [length, numberAllowed, charAllowed, setPassword])
   
      const copyPasswordToClip= useCallback(()=>{
       passwordRef.current?.select();
       passwordRef.current?.setSelectionRange(0, 99);
        window.navigator.clipboard.writeText(password)
      },[password])

  useEffect(()=>{ passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
     {/* <h1 className='text-4xl text text-center font-bold text-white'>Password Generator</h1> */}

     <div className='w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 my-8 text-orange-400 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='className="flex shadow rounded-lg
      overflow-hidden mb-4"'>

        <input 
        type='text' 
        value={password} 
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}

        ></input>
        <button 
        onClick={copyPasswordToClip}
        className='outline-none bg-blue-800 text-white
        px-3 py-1 shrink-0 rounded-lg'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          ></input>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)= !prev);
          }}></input>
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>{
            setCharAllowed((prev)= !prev);
          }}></input>
          <label htmlFor='characterInput'>Characters</label>
        </div>

      </div>
     </div>
    </>
  )
}

export default App
