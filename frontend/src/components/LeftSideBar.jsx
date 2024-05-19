import React from "react";
import { FaSearch } from "react-icons/fa";
import OtherUsers from "./OtherUsers";

const LeftSideBar = () => {
  return (
    <div className=" w-[300px] flex flex-col">
      <div>
        <form className="flex items-center space-x-1">
          <input className="placeholder-black outline-none bg-red-400  rounded-l-full px-4 py-2 font-bold mr-[-5px]" type="text" placeholder="search..." />
          <button className="bg-red-400 py-3 rounded-r-full ml-0 px-4">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="my-4 flex-1 overflow-auto">
        <OtherUsers />
      </div>
      <button className="px-4 py-2 bg-red-800 w-fit font-semibold">Log out</button>
    </div>
  );
};

export default LeftSideBar;
