import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setUserName] = ('')
    const [password, setPassword] = ('')

     const {setUser} = useContext (UserContext)

    const handleSubmit= (e) =>{
        e.preventDefault()
        setUser({username, password})

    }
  return (
    <div>

        <h2 className='text-2xl font-bold mt-4 py-7'>Login</h2>
        <input type='text' className='bg-gray-400 rounded py-1'
        value={username}
        onChange={(e)=>setUserName(e.target.value)}
        placeholder='username' />
          {" "}
        <input type='text'  className='bg-gray-400 rounded py-1'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' />
        <button className='bg-blue-400 rounded ml-3 py-1 px-2'
         onClick={handleSubmit}>Submit </button>
    </div>
  )
}

export default Login