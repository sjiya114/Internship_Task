import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets} from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
function SubBar() {
   const {setFilter,filter}=useContext(AppContext);
  return (
    <>
    <div className='max-w-screen-xl mx-auto flex justify-between border-b-2 py-2 mt-6 border-gray-400 max-md:hidden  '>
      <div className='flex space-x-5'>
        <NavLink className={`text-gray-500 ${filter==='all'?'text-black':''}`} onClick={()=>{setFilter("all")}}  >All Posts</NavLink>
        <NavLink className={`text-gray-500${filter==='Article'?'text-black':''}`} onClick={()=>{setFilter("Article")}}   >Article</NavLink>
        <NavLink className={`text-gray-500 ${filter==="Event"?'text-black':''}`}  onClick={()=>{setFilter("Event")}} >Event</NavLink>
        <NavLink className={`text-gray-500 ${filter==="Education"?'text-black':''}`}  onClick={()=>{setFilter("Education")}}  >Education</NavLink>
        <NavLink className={`text-gray-500 ${filter==="Job"?'text-black':''}`}  onClick={()=>{setFilter("Job")}} >Job</NavLink>
      </div>
      <div className='flex space-x-4 ' >
      <button className='rounded-lg text-black bg-gray-400 font-bold px-2 py-1 text-sm  flex space-x-2' > <span>Write a Post</span>  <img src={assets.options} className='w-2 h-3 mt-1' alt="" /> </button>
      <button  className='rounded-lg text-white bg-blue-800 px-2 text-sm font-normal flex space-x-2'> <span className='mt-2'>Join Group</span>
       <img src={assets.groupicon} className='w-10 h-10' alt="" />
      </button>
      </div>
    </div>
    <div className='w-full min-md:hidden flex flex-row justify-between mt-6'>
        <p className='font-bold text-normal' >All Posts</p>
       <button className='rounded-lg text-black bg-gray-400 px-2 py-2 text-sm font-normal flex space-x-2'>
        <form action="">
          <select name="filter" onChange={(e)=>{setFilter(e.target.value)}}  value={filter} id="filter">
            <option value="all">All</option>
            <option value="Article">Article</option>
            <option value="Event">Event</option>
            <option value="Job">Jobs</option>
            <option value="Education">Education</option>
          </select>
        </form>
       </button>
    </div>
    </>
  )
}

export default SubBar
