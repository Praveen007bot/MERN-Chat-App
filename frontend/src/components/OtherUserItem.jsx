import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUserItem = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser, onlineUsers } = useSelector((store) => store.user);
  const isOnline = onlineUsers?.includes(user._id);
  const handleSelectedUser = () => {
    dispatch(setSelectedUser(user));
  };
  return (
    <>
      <div
        onClick={handleSelectedUser}
        className={`${
          selectedUser?._id === user._id ? "bg-red-100" : ""
        } flex items-center px-2 py-1 space-x-4 cursor-pointer hover:bg-red-100`}
      >
        <div className={`avatar ${isOnline ? 'online' : ''} `}>
          <div className="w-10 rounded-full">
            <img src={user.profilePhoto} alt="profile" />
          </div>
        </div>
        <div className="name">{user.name}</div>
      </div>
    </>
  );
};

export default OtherUserItem;
