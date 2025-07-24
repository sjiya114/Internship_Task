import React, { useContext } from 'react'
import Posts from '../Components/Posts'
import Groups from './Groups'
import { AppContext } from '../context/AppContext'

function Home() {
  const {token}=useContext(AppContext);
  return (
    <div className='max-w-screen-xl mt-10 mx-auto  max-md:mx-0 max-md:w-full max-md:px-0 flex flex-row justify-between'>
      <Posts/>
        {token && <Groups hide={true} />}
    </div>
  )
}

export default Home
