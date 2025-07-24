import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
function Signin() {
  const {setToken,setUser,hide,setHide}=useContext(AppContext);
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    setUser(email.split("@")[0]);
    setToken(password+"####");
    localStorage.setItem("user",email.split("@")[0]);
    localStorage.setItem("token",password+"####");
    document.querySelector("form").reset();
    toast.success("logged in successfully");
    navigate("/");
  }

  return (
     <div className='fixed z-100 top-0 bottom-0 left-0 right-0  bg-black/70'>
         <div className='mt-20 w-[60vw] mx-[20vw] fixed  max-md:left-0 max-md:w-full max-md:right-0 max-md:mx-0 max-md:bottom-0'>
        
           <img onClick={()=>{setHide(true);navigate("/")}} src={assets.remove} className='w-5 h-5 my-2 mx-[98%] max-md:absolute max-md:mx-[95%]' alt="" />
         
          <div className=' w-full  rounded-lg bg-white border-gray-100 shadow-2xl shadow-gray-200  border-2' >
             <p  className='text-green-800 px-2 max-md:hidden rounded-t-lg text-center font-semibold text-sm bg-green-100  py-4' >Let's learn share and inspire others with our passion for computer engineering.Sign up now </p>
        
         <div className='rounded-lg bg-white flex flex-row max-md:flex-col space-x-4 mt-0 mx-10 my-10' >
          <div className='flex flex-col w-1/2 max-md:w-full   '>
            <p className='font-bold text-2xl max-md:hidden bg-white my-4 '>Sign In Account</p>
            <p className='font-bold text-2xl min-md:hidden bg-white my-4 '>Welcome back!</p>

             <form onSubmit={handleSubmit} className='flex flex-col space-y-4' action="">
               <div className='border-2 border-gray-400 rounded-lg flex flex-col' > 
                 <input type="text"  name='email' id='email' value={email}  onChange={(e)=>{ setEmail(e.target.value)  }} className='bg-gray-100 px-2 rounded-t-lg border-b-2 border-gray-400  py-2 text-sm font-semibold text-gray-900' placeholder='Email' />
                 <input type="password" name='password' id='password' value={password} onChange={(e)=>{ setPassword(e.target.value) }}  className='bg-gray-100 px-2 py-2 rounded-b-lg   text-sm font-semibold text-gray-900'  placeholder='Password' />
               </div>
               <div className='flex flex-row  justify-between'>
                 <button type='submit' className='bg-blue-700 max-md:w-[30vw]  mb-8 text-white px-4 py-2 w-full rounded-2xl text-sm font-semibold'>Sign In</button>
                  <p onClick={()=>
                    {navigate("/signup")}
                  } className='underline min-md:hidden text-gray-600 text-sm'>or Create Account</p>
               </div>
               
                 <button className='flex flex-row w-full border-gray-400 border-1  px-2 py-2 justify-center items-center space-x-4 '>
                    <img  className='w-6 h-6' src={assets.facebook}  alt="facebook" />
                    <span>Sign In with Facebook</span>
                 </button>
                 <button className='flex flex-row w-full border-gray-400 border-1 px-2 py-2 justify-center items-center space-x-4 '>
                   <img className='w-6 h-6' src={assets.google} alt="google" />
                   <span>Sign In with google</span>
                 </button>
                 <p className='font-semibold text-center text-sm'>Forget Password?</p>
             </form>
          </div>
          <div className='flex flex-col justify-between w-1/2 mt-10 max-md:w-full'>
             <p className='text-right text-sm max-md:text-center max-md:hidden   '>Don't have an account yet?<span className='text-blue-800 font-bold' onClick={()=>{navigate("/signup")}} >Create new for free!</span></p>
             <div>
               <img src={assets.authLogo} className='w-[60vw] h-[20vw] max-w-[900px]:w-[80vw] max-md:hidden  ' alt="authLogo" />
             </div>
          </div>
         </div>
       </div>
       </div>
     </div>
  
  )
}

export default Signin
