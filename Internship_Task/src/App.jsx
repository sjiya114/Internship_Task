import React from 'react'
import Signup from './pages/SignUp'
import Signin from './pages/Signin'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import SubBar from './Components/SubBar'
import Groups from './pages/Groups'
import Post from './Components/Posts'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
   
    <div className='overflow-x-hidden' >
       <Toaster/>
      <Navbar/>
      <Banner/>
      <SubBar/>
       <Home/>
       <Routes>
        <Route path="/signup" element={<Signup/>} ></Route>
        <Route path="/signin" element={<Signin/>}  ></Route>
       </Routes>
    </div>
  )
}

export default App
