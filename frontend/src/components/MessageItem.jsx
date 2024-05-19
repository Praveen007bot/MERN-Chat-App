import React from "react";

const MessageItem = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="chat-header">
        Obi-Wan Kenobi
        <time className="text-xs ml-4">12:45</time>
      </div>
      <div className="chat-bubble">You were the Chosen One!</div>
    </div>
  );
};

export default MessageItem;