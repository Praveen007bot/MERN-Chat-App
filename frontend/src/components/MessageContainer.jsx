import React, { useEffect } from "react";

import Messages from "./Messages";
import { setSelectedUser } from "../redux/userSlice";
import SendInput from "./SendInput";
import { useDispatch, useSelector } from "react-redux";

const MessageContainer = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);

  return (
    <>
      {selectedUser !== null ? (
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
          <SendInput />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full text-white">
          <p className="text-4xl font-bold">Hi, Praveen</p>
          <p className="text-2xl mt-2">Let's Start Conversation</p>

        </div>
      )}
    </>
  );
};

export default MessageContainer;
