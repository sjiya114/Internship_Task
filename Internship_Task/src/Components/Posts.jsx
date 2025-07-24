import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import Groups from '../pages/Groups'
import { AppContext } from '../context/AppContext'
function Posts() {
  const {filter,token}=useContext(AppContext);
  const [post,setPost]=useState(assets.postData);
  const [show,setShow]=useState(false);
  const filteredOne=()=>
  {
     if(filter==="all")
    setPost(assets.postData);
  else{
   const arr=assets.postData.filter((item)=>(
     item.title===filter
   ));
   setPost(arr);
  }
  }
  useEffect(()=>
  {
    filteredOne();
  },[filter])

  return (
     <div className='flex flex-col space-y-4 w-full mx-auto'>
        {post.map((data,index)=>(<div key={index}  className={` ${!token?'w-[40%]':'w-[60%]'}  shadow-2xl hover:scale-105  shadow-blue-950  max-md:w-full max-md:mx-4 max-md:px-0  h-fit flex flex-col space-y-4  rounded-lg border-2 border-gray-400 `}>
       <div className='w-full'>
        {data.bannerImage && <img src={data.bannerImage} className='w-full  h-60 shadow-2xl shadow-white ' alt="" />}
       </div>
       <div className='flex flex-col space-y-3 px-2 py-2'>
        <div className='flex flex-row space-x-4'>
          <img src={data.titleImage} className='w-5 h-5' alt="" />
         <h1 className='text-lg' >{data.title}</h1>
        </div>
         <div className='flex flex-row justify-between'>
           <p className='text-xl font-bold'>{data.heading}</p>
           <img onClick={()=>setShow(!show)} className='w-5 h-5' src={assets.horizontaldots} alt="" />
            {show && <div className=' bg-gray-100 list-none flex flex-col space-y-1   '>
             <li className='px-2 py-1'>Edit</li>
             <li  className='px-2 py-1'>Report</li>
             <li  className='px-2 py-1'>Option3</li>
           </div>}
         </div>
         
         {data.description && <p className='text-sm text-gray-500' >{data.description}</p>}
         <div className='flex flex-row space-x-4'>
            {data.companyName && 
          <div className='flex flex-row space-x-4'>
            <img src={assets.job} className='w-5 h-5' alt="" />
              <span>{data.companyName}</span>
          </div>
         }
           {data.location && <div className='flex flex-row space-x-4'>
              <img src={assets.map} className='w-5 h-5' alt="" />
              <span>{data.location}</span>
           </div>}
          {data.date &&  <div className='flex flex-row space-x-4'>
             <img src={assets.calendar} className='w-5 h-5' alt="" />
             <span>{data.date}</span>
           </div>}
         </div>
        
          {data.buttonTitle && <button className='px-4 py-2 border-2 border-gray-500 rounded-lg w-full' >{data.buttonTitle}</button>}


         <div className='flex flex-row justify-between'>
          <div className='flex flex-row space-x-4'>
             <img src={data.user_profile} className='rounded-full w-10 h-10' alt="" />
           <p className='font-bold' >{data.username}</p>
          </div>
          <div className='flex flex-row space-x-2'>
             <img className='w-6 h-6' src={assets.view} alt="" />
             <p>{data.views} views</p>
              <button className='bg-gray-400 px-2 py-1 rounded-lg'> <img src={assets.share} className='w-6 h-6' alt="share" /></button>
          </div>
         </div>
       </div>
    </div>))}
     </div>
    
  )
}

export default Posts
