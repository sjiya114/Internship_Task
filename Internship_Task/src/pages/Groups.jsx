import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'

function Groups({hide}) {
 
  return (
    <div className={`w-[40%] ${hide?'max-md:hidden':''} `}>
        <div className='flex justify-between w-full border-b-2 border-gray-400 py-2 '>
        <form action="" className='flex flex-row items-center' >
         <img src={assets.map}  className='w-4 h-4'   alt="" />
        <input type="text" placeholder='Enter your location' />
      </form>
          <img src={assets.cross_icon} className='w-4 h-4 ' alt="" />
        </div>
        <p className='text-gray-600 my-6 '>your location will help us serve better and extend a personalised experience</p>
          <div className='flex space-x-2 my-3'>
             <img src={assets.like}  className='w-4 h-4 mt-2' alt="" />
        <h1 className='text-2xl'>Recommended Groups</h1>
          </div>
        
        <div className='flex flex-col space-y-2'>
            {assets.groupData.map((data,index)=>(
                <Card url={data.url} key={index} groupname={data.groupName} />
            ))}
        </div>
         <Link className='text-blue-800 w-full my-4'>see more...</Link>
    </div>
  )
}

export default Groups
