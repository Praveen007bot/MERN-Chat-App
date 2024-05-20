import React from "react";
import {useSelector} from 'react-redux'

const MessageItem = ({ message, selectedUser }) => {
  const {authUser} = useSelector(store => store.user)
  return (
    <div className={`chat ${authUser._id === message.senderId ? 'chat-end' : 'chat-start'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={selectedUser?.profilePhoto}
          />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs ml-4">12:45</time>
      </div>
      <div className="chat-bubble">{message?.message}</div>
    </div>
  );
};

export default MessageItem;
