import React from 'react'
import { useState } from 'react';

function Card({url,groupname}) {
   const [gstatus,setGstatus]=useState("follow");
  return (
    <div className='flex w-full flex-row items-center justify-between'>
       <img className='w-16 h-16 rounded-full' src={url} alt="" />
       <p>{groupname}</p>
       <button onClick={()=>{gstatus==="follow"?setGstatus("following"):setGstatus("follow")}}  className='rounded-lg bg-gray-400 text-black px-2 py-1 w-fit'>{gstatus}</button>
    </div>
  )
}

export default Card
