import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import App from '../App'

function Navbar() {
  const {token,user,setUser,setToken,hide,setHide}=useContext(AppContext);
  const [hidden,setHidden]=useState(true);
  const navigate=useNavigate();
  return (
    <div className='flex flex-row items-center max-md:hidden z-50   top-0 justify-between w-full h-20 fixed  bg-white  border-b-2 border-white shadow-2xl px-10 '>
      <img src={assets.logo} className='w-40' alt="logo" />
      <button className='space-x-4 rounded-2xl bg-gray-100 w-fit h-fit px-2 py-2'>
        <img src={assets.search} className='w-5 h-5 inline-block' alt="search" />
        <input type="text" className='w-80 placeholder:text-gray-600' placeholder='Search for your favourite groups in ATG' />
      </button>
      {!token?<p  onClick={()=>{setHide(false);navigate("/signup")}} >Create account. <span className='text-blue-800 cursor-pointer font-bold'>It's free!</span> </p>
      :<>
       <button className='flex flex-row'><img src="" alt="" />
       <span>{user}</span>
       <img src={assets.options} onClick={()=>setHidden(!hidden)} className='w-4 h-4 cursor-pointer' alt="" />
       </button>
      </>}
      {
        token && !hidden && <> <button onClick={()=>{ setToken("");  setUser(""); localStorage.clear("token");localStorage.clear("user");}} className='bg-white border-gray-100 border-2 rounded-lg text-black font-semibold text-sm px-2 py-2 absolute right-8 mt-14'  >Logout</button>   </>
      }
    </div>
  )
}

export default Navbar
