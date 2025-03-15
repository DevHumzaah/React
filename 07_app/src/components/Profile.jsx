import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

 const {user} = useContext (UserContext)
    
  if (!user) return <div className='mt-4 font-bold'>Please Login</div>

  return <div className='mt-4 font-bold'>Welcome {user.username}</div>
}

export default Profile