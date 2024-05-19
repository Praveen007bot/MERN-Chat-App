import React from "react";

const OtherUserItem = () => {
  return (
    <>
      <div className="flex items-center px-2 py-1 space-x-4 cursor-pointer hover:bg-red-100">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUem1ykMgZrm7P2GNRhID1fnipTWf1kQ1dA&usqp=CAU" alt="profile" />
          </div>
        </div>
        <div className="name">name</div>
      </div>
    </>
  );
};

export default OtherUserItem;
