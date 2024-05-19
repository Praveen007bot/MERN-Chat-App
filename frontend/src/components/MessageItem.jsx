import React from "react";

const MessageItem = ({ message, selectedUser }) => {
  return (
    <div className="chat chat-end">
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
