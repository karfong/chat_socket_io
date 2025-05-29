import React from "react";
import assets from "../assets/assets";

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  return (
    <div>
      <div className="pd-5">
        <div className="flex justify-between items-center"></div>
        <img src={assets.logo} alt="logo" className="max-w-40" />
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
