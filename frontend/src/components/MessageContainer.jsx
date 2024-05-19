import React from "react";
import { IoSend } from "react-icons/io5";
import Messages from "./Messages";
import {useSelector} from 'react-redux'

const MessageContainer = () => {

  const {selectedUser} = useSelector(store => store.user)
  return (
    <div className="flex flex-1 bg-red-200 ml-4 rounded-lg flex-col">
      <div className="info flex px-4 py-2  bg-red-100 items-center space-x-4">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img
              src={selectedUser?.profilePhoto}
              alt="profile"
            />
          </div>
        </div>
        <div className="name font-semibold">{selectedUser?.name}</div>
      </div>
      <div className="messages flex-1 overflow-auto">
        <Messages />
      </div>
      <div className="userinput flex items-center mx-4 mb-2">
        <input
          className="placeholder-black outline-none bg-red-400 w-[600px] rounded-l-full px-4 py-2 font-bold mr-[-5px]"
          type="text"
          placeholder="Enter a message..."
        />
        <button className="bg-red-400 py-3 rounded-r-full ml-0 px-4">
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
