import React from 'react'
import LeftSideBar from './LeftSideBar'
import MessageContainer from './MessageContainer'

const Home = () => {
  return (
    <div className='flex w-[1000px] bg bg-red-300 rounded-lg h-[600px] p-4'>
      <LeftSideBar />
      <MessageContainer />
    </div>
  )
}

export default Home