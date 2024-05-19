import React from "react";
import OtherUserItem from "./OtherUserItem";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  useGetOtherUsers();
  const { otherUsers } = useSelector((store) => store.user);
  return (
    <div className="bg-red-200 rounded-lg">
      {otherUsers?.map((user) => (
        <OtherUserItem key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;
