import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data ,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rahultejus#')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <>
    <div
    className='text-center m-4 bg-gray-500 p-4 text-3xl'
    >Public Repos:{data.public_repos}
    <br/>
     Github Following:{data.following}
     <br/>
     Github Follower:{data.followers}
    <img src={data.avatar_url} alt="Profile Picture" />
    </div>
    
    </>
  )
}

export default Github

export const githubInfoLoader=async ()=>{
   const response=await fetch('https://api.github.com/users/rahultejus#')
   return response.json()
}