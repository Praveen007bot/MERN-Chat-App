import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";
import OtherUsers from "./OtherUsers";

const LeftSideBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { otherUsers } = useSelector((store) => store.user);
  const searchUsers = otherUsers

  const handleSearch = (e) => {
    e.preventDefault();
    const conversationUser = searchUsers?.find((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    if (conversationUser) {
      dispatch(setOtherUsers([conversationUser]));
    } else {
      toast.error("User not found!");
    }
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout");
      dispatch({ type: "RESET_STATE" });
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-[300px] flex flex-col">
      <div>
        <form onSubmit={handleSearch} className="flex items-center space-x-1">
          <input
            className="placeholder-black outline-none bg-red-400  rounded-l-full px-4 py-2 font-bold mr-[-5px]"
            type="text"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-400 py-3 rounded-r-full ml-0 px-4"
          >
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="my-4 flex-1 overflow-auto">
        <OtherUsers />
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-800 w-fit font-semibold"
      >
        Log out
      </button>
    </div>
  );
};

export default LeftSideBar;
