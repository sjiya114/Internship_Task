import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import toast from 'react-hot-toast';
function Login() {
  const navigate=useNavigate();
   const {setToken,setUser,hide,setHide}=useContext(AppContext);
  const [data,setData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const onChangeHandler=()=>
  {
    setData({...data,[e.target.name]:e.target.value});
  }
    const handleSubmit=(e)=>
    {
      e.preventDefault();
      setUser(data.firstname+" "+data.lastname);
      setToken(password+"####");
      localStorage.setItem("user",(data.firstname+" "+data.lastname));
      localStorage.setItem("token",password+"####");
      document.querySelector("form").reset();
      toast.success("created account successfully");
      navigate("/");
    }
  return (
    <>
    <div className='fixed  z-100 top-0 bottom-0 left-0 right-0  bg-black/70 '>
      <div className='mt-20 w-[60vw] mx-[20vw] fixed  max-md:left-0 max-md:w-full max-md:right-0 max-md:mx-0 max-md:bottom-0  '>
        <img onClick={()=>{setHide(true);navigate("/")}} src={assets.remove} className='w-5 h-5 my-2 mx-[98%] max-md:absolute max-md:mx-[95%]  ' alt="" />
       <div className=' w-full  rounded-lg bg-white border-gray-100 shadow-2xl shadow-gray-200  border-2' >
          <p  className='text-green-800  max-md:hidden px-2 rounded-t-lg text-center font-semibold text-sm bg-green-100  py-4' >Let's learn share and inspire others with our passion for computer engineering.Sign up now </p>
     
      <div className='rounded-lg bg-white flex flex-row max-md:flex-col space-x-4 mt-0 mx-10 my-10' >
       <div className='flex flex-col w-1/2 max-md:w-full   '>
         <p className='font-bold text-2xl bg-white my-4 '>Create Account</p>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-4' action="">
            <div className='border-2 border-gray-400 flex flex-col rounded-lg ' >
               <div className='flex flex-row border-b-2 border-gray-400   w-full '>
                <input type="text" name='firstname' id='firstname' onChange={onChangeHandler}  className='bg-gray-100 border-r-2 rounded-tl-lg border-gray-400 w-1/2 px-2 py-2 text-sm font-semibold text-gray-900'    placeholder='First Name' />
                <input type="text" name='lastname' id='lastname' onChange={onChangeHandler}  className='bg-gray-100 w-1/2 rounded-tr-lg  px-2 py-2 text-sm font-semibold text-gray-900' placeholder='Last Name' />
              </div>
              <input type="text" name='email' id='email' onChange={onChangeHandler}  className='bg-gray-100 px-2 border-b-2 border-gray-400  py-2 text-sm font-semibold text-gray-900' placeholder='Email' />
              <input type="text" name='password' id='password' onChange={onChangeHandler}  className='bg-gray-100 px-2 py-2 border-b-2 border-gray-400  text-sm font-semibold text-gray-900'  placeholder='Password' />
              <input type="text" name='confirmPassword' id='confirmPassword' onChange={onChangeHandler}  className='bg-gray-100 px-2 py-2 rounded-b-lg text-sm font-semibold text-gray-900' placeholder='Confirm Password' />
            </div>
               <div className='flex flex-row  justify-between space-x-4'>
                 <button type='submit' className='bg-blue-700 mb-8 max-md:w-[30vw] max-md:px-1   text-white px-4 py-2 w-full rounded-2xl text-sm font-semibold'>Create Account</button>
                 <p onClick={()=>{navigate("/signin")}} className='underline min-md:hidden text-gray-600 text-sm'>or Signin</p>
               </div>
             
              <button className='flex flex-row w-full border-gray-400 border-1  px-2 py-2 justify-center items-center space-x-4 '>
                 <img  className='w-6 h-6' src={assets.facebook}  alt="facebook" />
                 <span>Sign up with Facebook</span>
              </button>
              <button className='flex flex-row w-full border-gray-400 border-1 px-2 py-2 justify-center items-center space-x-4 '>
                <img className='w-6 h-6' src={assets.google} alt="google" />
                <span>Sign up with google</span>
              </button>
          </form>
       </div>
       <div className='flex flex-col justify-between w-1/2 mt-10 max-md:w-full'>
          <p className='text-right text-sm max-md:text-center max-md:hidden '>Already have an account?<span onClick={()=>{navigate("/signin")}} className='text-blue-800 font-bold'>Sign In</span></p>
          <div>
            <img src={assets.authLogo} className='w-[60vw] h-[20vw] max-w-[900px]:w-[80vw] max-md:hidden  ' alt="authLogo" />
          </div>
          <span className='text-xs text-center text-gray-600'>By signing up,you agree to our Terms and conditions,Privacy policy </span>
       </div>
      </div>
    </div>
    </div>
    </div>
   </> 
   
  )
}

export default Login
