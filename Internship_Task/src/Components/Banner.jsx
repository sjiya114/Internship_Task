import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate=useNavigate();
  const {token}=useContext(AppContext);
   const [gstatus,setGstatus]=useState("Join Group");
  return (
    <>
      <div className={`mt-20 max-md:mt-0 bg-cover bg-center bg-no-repeat w-full left-0 right-0 h-140 max-md:h-80 opacity-[0.89] `}  style={{
              backgroundImage: `url(${assets.banner})`
          }} >
      <button onClick={()=>{ !token?navigate("/signin"):gstatus==="Join Group"?setGstatus("Leave Group"):setGstatus("Join Group")}} className='text-white border-2 border-white w-30 px-2 mt-6 py-2 min-md:hidden rounded-lg mx-[60%] font-semibold'  >{gstatus}</button>
     <h1 className='text-white max-w-screen-xl max-md:text-3xl mx-40 max-md:mx-10 max-md:pt-30 pt-80 font-bold text-5xl text-shadow-2xs shadow-amber-50 tracking-tight'>Computer Engineering</h1>
     <p className='text-white max-w-screen-xl mx-40 max-md:mx-10  pt-2 text-shadow-2xs shadow-white  '>142,765 Computer Engineers follow this</p>
    </div>
    </>
  )
}

export default Banner
//  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),