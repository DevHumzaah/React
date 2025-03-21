import React, { useState } from 'react'
import { useEffect } from 'react'
import { Await, useLoaderData } from 'react-router-dom'



function GitHub() {
    
    const data = useLoaderData()

    // const [data, setData]= useState([])
    // useEffect(()=>{
    //        fetch('https://api.github.com/users/DevHumzaah')
    //        .then(response =>response.json())
    //        .then (data =>{
    //         setData(data)
    //        })
        
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-800 text-white
    p-4  text-3xl'>GitHub Followers: {data.followers}
    <img src= {data.avatar_url} alt='Git Picture ' width={300} />
    </div>
  )
}

export default GitHub

export const githubInfoLoader =async()=>{

    const response= await fetch('https://api.github.com/users/DevHumzaah')
    return response.json()
}