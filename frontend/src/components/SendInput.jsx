import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { setMessages } from "../redux/messageSlice";

const SendInput = () => {
  const [chat, setChat] = useState();
  const { selectedUser } = useSelector((state) => state.user);
  const { messages } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/message/send/${selectedUser?._id}`,
        { message: chat },
        { withCredentials: true }
      );
      dispatch(setMessages([...messages, res?.data?.newMessage]));
    } catch (error) {
      console.log(error);
    }
    setChat("");
  };
  return (
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
  );
};

export default SendInput;
