import React from 'react'
import MessageItem from './MessageItem'
import useGetMessages from '../hooks/useGetMessages'
import { useSelector } from 'react-redux'

const Messages = () => {
  const {messages} = useSelector(store => store.message)
  const {selectedUser} = useSelector(store => store.user)
  useGetMessages();
  return (
    <div>
      {
        messages && messages?.map((message) => (<MessageItem key={message?._id} message={message} selectedUser={selectedUser} />))
      }
        
    </div>
  )
}

export default Messages