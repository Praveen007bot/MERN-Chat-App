import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMessages } from "../redux/messageSlice";

const MessageContainer = () => {
  const [chat, setChat] = useState();
  const { selectedUser } = useSelector((state) => state.user);
  const { messages } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const handleSendMessage = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/message/send/${selectedUser?._id}`,
        { message: chat },
        { withCredentials: true }
      );
      console.log(res?.data?.newMessages);
      dispatch(setMessages([...messages, res?.data?.newMessage]));
    } catch (error) {
      console.log(error);
    }
    setChat("");
  };

  return (
    <div className="flex flex-1 bg-red-200 ml-4 rounded-lg flex-col">
      <div className="info flex px-4 py-2  bg-red-100 items-center space-x-4">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={selectedUser?.profilePhoto} alt="profile" />
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
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="bg-red-400 py-3 rounded-r-full ml-0 px-4"
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
